/**
 * User: RomanYukhnevich
 * Date: 10/21/13
 * Time: 3:31 PM
 */
Ext.define('News.view.NewsContentPanel', {
    extend: 'Ext.panel.Panel',
    layout: 'anchor',
    xtype: 'contentpanel',
    border: false,
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});
