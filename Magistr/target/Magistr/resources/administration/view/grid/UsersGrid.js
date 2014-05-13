Ext.define('Magistr.administration.view.grid.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersgrid',
    id: 'users-grid',
    title: 'Управление пользователями',
    columnLines: true,
    loadMask: true,
    forceFit: true,
    initComponent: function () {
        var me = this;
        var authority;
        var store =Ext.create('Magistr.administration.store.UsersStore');
        var rowEditing = {
            ptype: 'rowediting',
            clicksToMoveEditor: 1,
            autoCancel: false
        };
        Ext.apply(me, {
            store: store,
            columns: [{
                text: 'Username',
                dataIndex: 'username',
                minWidth: 100,
                flex: 2
            },{
                text: 'Authorities',
                dataIndex: 'authority',
                minWidth: 150,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false,
                    value: authority
                }
            },{
                text: 'Enabled',
                dataIndex: 'enabled',
                maxWidth: 100,
                xtype: 'booleancolumn',
                editor: {
                    xtype: 'checkbox'
                }
            }],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: store,
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
            plugins: [rowEditing],
            tbar: [{
                itemId: 'removeUser',
                text: 'Remove User',
                icon: DELETE_ICON,
                handler: function() {
                    var sm = me.getSelectionModel();
                    store.remove(sm.getSelection());
                    if (store.getCount() > 0) {
                        sm.select(0);
                    }
                }
            }]
        });
        me.callParent(arguments);
    }
});

