
Ext.define('Magistr.administration.view.grid.MagistrGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'magistrgrid',
    id: 'magistr-grid',
    title: 'Список зарегистрировавшихся в магистратуру',
    columnLines: true,
    loadMask: true,
    forceFit: true,
    initComponent: function () {
        var me = this;
        me.store = Ext.create('Magistr.administration.store.MagistrStore');
        me.columns = [
            {xtype: 'rownumberer'},
            {
                text: 'Фамиилия',
                dataIndex: 'magName1'
            },
            {
                text: 'Имя',
                dataIndex: 'magName2'
            },
            {
                text: 'Отчество',
                dataIndex: 'magName3'
            },
            {
                text: 'Телефон',
                dataIndex: 'phone'
            },
            {
                text: 'Email',
                dataIndex: 'email'
            },
            {
                xtype: 'checkcolumn',
                disabled: true,
                text: 'Проверено',
                dataIndex: 'checked'
            }
        ];
        me.dockedItems = [
            {
                xtype: 'pagingtoolbar',
                store: me.store,
                dock: 'bottom',
                displayInfo: true
            }
        ];
        me.callParent(arguments);
    }
});

