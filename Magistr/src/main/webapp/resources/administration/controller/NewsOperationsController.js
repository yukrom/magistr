/**
 * User: RomanYukhnevich
 * Date: 10/22/13
 * Time: 3:06 PM
 */
Ext.define('News.controller.NewsOperationsController', {
    extend: 'Ext.app.Controller',
    scope: this,
    refs: [
        {
            ref: 'editButton',
            selector: '#edit-magistr-but'
        },
        {
            ref: 'addButton',
            selector: '#add-magistr-but'
        },
        {
            ref: 'deleteButton',
            selector: '#delete-magistr-but'
        },
        {
            ref: 'newsPreviewGrid',
            selector: '#magistr-preview-grid'
        },
        {
            ref: 'okButton',
            selector: '#magistr-dialog-ok-but'
        },
        {
            ref: 'newsForm',
            selector: '#magistr-form'
        },
        {
            ref: 'newsDialog',
            selector: '#magistr-dialog'
        }


    ],
    init: function () {
        var me = this;
        me.control({
            '#delete-news-but': {
                click: function() {
                    grid = me.getNewsPreviewGrid();
                    selection = grid.getSelectionModel().getSelection();
                    store = grid.getStore();
                    store.remove(selection);
                    grid.getSelectionModel().clearSelections();
                    store.reload();
                }
            },
            '#edit-news-but': {
                click: function() {
                    grid = me.getNewsPreviewGrid();
                    selection = grid.getSelectionModel().getSelection();
                    me.record = selection[0];
                    store = grid.getStore();
                    if(!grid.getSelectionModel().hasSelection()) {
                        window.alert('Select the row first!');
                    } else {
                        me.addForm('Edit magistr');
                        form = me.getNewsForm();
                        form.getForm().loadRecord(me.record);
                    }
                }
            },
            '#add-news-but': {
                click: function() {
                    me.addForm('Add magistr');
                }
            },
            '#news-dialog-ok-but': {
                click: function() {
                    var form = me.getNewsForm();
                    if (me.record) {
                        form.getForm().updateRecord(me.record);
                    } else {
                        grid = me.getNewsPreviewGrid();
                        index = grid.getStore().getTotalCount();
                        var record = grid.getStore().createModel('');
                        form.getForm().updateRecord(record);
                        grid.getStore().insert(index, record);
                    }
                    me.record = null;
                    dialog = me.getNewsDialog().close();
                    grid = me.getNewsPreviewGrid();
                    grid.getStore().reload();
                }
            }
        })
    },
    addForm: function(title) {
        var me = this;
        Ext.create('Ext.window.Window', {
            title: title,
            id: 'magistr-dialog',
            width: 400,
            items: {
                xtype: 'form',
                id: 'magistr-form',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [me.createCategoryCombo(),{
                    xtype: 'textfield',
                    name: 'title',
                    fieldLabel: 'Title',
                    allowBlank: false
                },{
                    xtype: 'datefield',
                    name: 'date',
                    fieldLabel: 'Date',
                    format: 'm/d/Y H:i',
                    allowBlank: false,
                    value: new Date()
                },{
                    xtype: 'textarea',
                    fieldLabel: 'Content (html supported)',
                    name: 'content',
                    allowBlank: false
                }],
                buttons: [{
                    text: 'OK',
                    formBind: true,
                    disabled: true,
                    id: 'magistr-dialog-ok-but'
                }]
            }
        }).show();
    },
    createCategoryCombo: function() {
        var category = Ext.create('Ext.data.Store', {
            fields: ['title', 'value'],
            data : [
                {"title":"Politics", "value":"politics"},
                {"title":"Auto", "value":"auto"},
                {"title":"Culture", "value":"culture"}
            ]
        });
        return {
            xtype: 'combo',
            fieldLabel: 'Category',
            store: category,
            queryMode: 'local',
            displayField: 'title',
            valueField: 'value',
            name: 'category',
            allowBlank: false
        }
    }
});


