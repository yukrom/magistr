/**
 * User: RomanYukhnevich
 * Date: 10/17/13
 * Time: 5:28 PM
 */
Ext.define('News.view.MainContent',{
    extend:'Ext.panel.Panel',
    xtype: 'maincontent',
    initComponent:function () {
        var me = this;
        Ext.apply(me,{
            border: false,
            items: [
                {
                    xtype: 'tabpanel',
                    border: false,
                    id: 'magistr-tabpanel',
                    items: [{
                        layout: 'fit',
                        id: 'preview-tab',
                        title: 'News preview',
                        items: [{xtype: 'previewgrid'}]
                    }]
                }
            ]
         });
        me.callParent(arguments);
    }
})
