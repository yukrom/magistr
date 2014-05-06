/**
 * User: RomanYukhnevich
 * Date: 10/21/13
 * Time: 1:22 PM
 */
Ext.define('News.view.grid.CommentsGrid',{
    extend: 'Ext.panel.Panel',
    xtype: 'commentsgrid',
    layout: 'anchor',
    frame: true,
    newsId: 0,
    border: false,
    margin: '5 0 0 0',
    collapsible: true,
    collapsed: true,
    title: 'Comments',
    initComponent: function() {
        var store = Ext.data.StoreManager.lookup('commentsStore');
        var me = this;
        Ext.apply(me,{
            items: [me.addCommentForm(store),
            {
                xtupe: 'panel',
                height: 2,
                border: true
            }, me.addCommentsGrid(store)]
        });
        me.on('beforeexpand',function() {
            store.load();
        });
        me.callParent(arguments);
    },
    getNewsId: function() {
        return this.newsId;
    },
    addCommentForm: function(store) {
        var me = this;
        var commentPanel = {
            xtype: 'form',
            header: false,
            border: false,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textarea',
                grow: true,
                margin: 5,
                name: 'comment',
                fieldLabel: 'Comment',
                anchor: '100%',
                allowBlank: false
            }],
            buttons: [{
                text: 'Add',
                formBind: true,
                disabled: true,
                handler: function() {
                    var form = this.up('form').getForm();
                    if(form.isValid) {
                        index = store.getTotalCount();
                        var record = store.createModel('');
                        record.data.author = USER_NAME;
                        record.data.newsId = me.getNewsId(),
                        record.data.date = new Date();
                        form.updateRecord(record);
                        store.insert(index, record);
                        form.reset();
                    }
                }
            },{
                text: 'Cancel',
                handler: function() {
                    var form = this.up('form').getForm();
                    form.reset();
                }
            }]
        }
        return commentPanel;
    },
    addCommentsGrid: function(store) {
        var me = this;
        var grid = {
            xtype: 'grid',
            store: store,
            border: false,
            autoScroll: true,
            height: 300,
            layout: 'anchor',
            header: false,
            columnLines: false,
            loadMask: true,
            hideHeaders: true,
            columns: [
                {dataIndex: 'author', maxWidth: 100},
                {dataIndex: 'date', maxWidth: 100, xtype: 'datecolumn',   format:'m/d/Y H:i'},
                {dataIndex: 'comment'},
                me.addAdminTools()
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: store,
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
            forceFit: true
        };
        return grid;
    },
    addAdminTools: function() {
        if(ROLE == 'ROLE_ADMIN') {
            return {
                xtype:'actioncolumn',
                maxWidth: 50,
                items: [{
                    icon: EDIT_ICON,
                    tooltip: 'Edit',
                    handler: function(me) {
                        if(!me.getSelectionModel().hasSelection()) {
                            window.alert('Select the row first!');
                        } else {
                            var record = me.getSelectionModel().getSelection();
                            Ext.create('Ext.window.Window', {
                                title: 'Edit comment',
                                height: 200,
                                width: 400,
                                items: {
                                    xtype: 'form',
                                    id: 'cedit-form',
                                    layout: 'anchor',
                                    defaults: {
                                        anchor: '100%'
                                    },
                                    items: [{
                                        xtype: 'textarea',
                                        fieldLabel: 'Comment',
                                        name: 'comment',
                                        allowBlank: false
                                    }],
                                    buttons: [{
                                        text: 'Edit',
                                        formBind: true,
                                        disabled: true,
                                        handler: function() {
                                            var form = Ext.getCmp('cedit-form');
                                            form.getForm().updateRecord(record[0]);
                                            form.ownerCt.close();
                                        }
                                    }]
                                }
                            }).show();
                            Ext.getCmp('cedit-form').getForm().loadRecord(record[0]);
                            store.reload();
                        }
                    }
                },{
                    icon: DELETE_ICON,
                    tooltip: 'Delete',
                    handler: function(me) {
                        if(!me.getSelectionModel().hasSelection()) {
                            window.alert('Select the row first!');
                        } else {
                            var record = me.getSelectionModel().getSelection();
                            me.getStore().remove(record);
                        }
                        me.getSelectionModel().clearSelections();
                        store.reload();
                    }
                }]
            };
        } else {
            return {};
        }
    }
})
