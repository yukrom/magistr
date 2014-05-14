Ext.define('Magistr.administration.view.grid.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersgrid',
    id: 'users-grid',
    title: '&#1059;&#1087;&#1088;&#1072;&#1074;&#1083;&#1077;&#1085;&#1080;&#1077; &#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1103;&#1084;&#1080;',
    columnLines: true,
    loadMask: true,
    forceFit: true,
    initComponent: function () {
        var me = this;
        var authority;
        var store = Ext.create('Magistr.administration.store.UsersStore');
        var rowEditing = {
            ptype: 'rowediting',
            clicksToMoveEditor: 1,
            autoCancel: false
        };
        Ext.apply(me, {
            store: store,
            columns: [{
                text: '&#1055;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1100;',
                dataIndex: 'username',
                minWidth: 100,
                flex: 2
            },{
                text: '&#1056;&#1086;&#1083;&#1100;',
                dataIndex: 'authority',
                minWidth: 150,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false,
                    value: authority
                }
            },{
                text: '&#1040;&#1082;&#1090;&#1080;&#1074;&#1077;&#1085;',
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
                text: '&#1059;&#1076;&#1072;&#1083;&#1080;&#1090;&#1100; &#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1103;',
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

