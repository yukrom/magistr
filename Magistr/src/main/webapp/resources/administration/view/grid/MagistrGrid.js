
Ext.define('Magistr.administration.view.grid.MagistrGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'magistrgrid',
    id: 'magistr-grid',
    title: '&#1057;&#1087;&#1080;&#1089;&#1086;&#1082; &#1079;&#1072;&#1088;&#1077;&#1075;&#1080;&#1089;&#1090;&#1088;&#1080;&#1088;&#1086;&#1074;&#1072;&#1074;&#1096;&#1080;&#1093;&#1089;&#1103; &#1074; &#1084;&#1072;&#1075;&#1080;&#1089;&#1090;&#1088;&#1072;&#1090;&#1091;&#1088;&#1091;',
    columnLines: true,
    loadMask: true,
    forceFit: true,
    initComponent: function () {
        var me = this;
        me.store = Ext.create('Magistr.administration.store.MagistrStore');
        me.columns = [
            {xtype: 'rownumberer'},
            {
                text: '&#1060;&#1072;&#1084;&#1080;&#1083;&#1080;&#1103;',
                dataIndex: 'magName1'
            },
            {
                text: '&#1048;&#1084;&#1103;',
                dataIndex: 'magName2'
            },
            {
                text: '&#1054;&#1090;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086;',
                dataIndex: 'magName3'
            },
            {
                text: '&#1058;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085;',
                dataIndex: 'phone'
            },
            {
                text: 'Email',
                dataIndex: 'email'
            },
            {
                xtype: 'checkcolumn',
                disabled: true,
                text: '&#1055;&#1088;&#1086;&#1074;&#1077;&#1088;&#1077;&#1085;&#1086;',
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

