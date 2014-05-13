/**
 * User: RomanYukhnevich
 * Date: 10/17/13
 * Time: 5:28 PM
 */
Ext.define('News.view.MainContent', {
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
                }
            ]
        });
        me.callParent(arguments);
    }
})
