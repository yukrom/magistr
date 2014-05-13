/**
 * User: RomanYukhnevich
 * Date: 10/17/13
 * Time: 5:28 PM
 */
Ext.define('Magistr.administration.view.MainContent', {
    extend: 'Ext.panel.Panel',
    xtype: 'maincontent',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            border: false,
            layout: 'hbox',
            items: [
                {
                    xtype: 'usersgrid',
                    collapsible: true,
                    collapsed: true
                },
                {
                    xtype: 'magistrgrid',
                    collapsible: true,
                    collapsed: false
                }
            ]
        });
        me.callParent(arguments);
    }
});
