/**
 * User: RomanYukhnevich
 * Date: 10/16/13
 * Time: 6:35 PM
 */
Ext.define('Magistr.administration.view.AdministrationViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'viewport.admin',

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            layout: 'border',
            items: [
                {
                    xtype: 'panel',
                    title: 'Информация',
                    id: 'login-info',
                    region: 'west',
                    margins: '0 0 5 0',
                    collapsible: true,
                    split: true,
                    height: 30,
                    items: [
                        {
                            xtype: 'label',
                            text: me.getLoginInfo()
                        },
                        {
                            xtype: 'button',
                            text: 'Logout',
                            href: '/magistr/logout'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    region: 'center',
                    collapsible: false,
                    split: true,
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
                        },
                        {
                            xtype: 'magistrform',
                            collapsible: true,
                            collapsed: true
                        }
                    ]
                }
            ]

        });
        me.callParent(arguments);
    },
    getLoginInfo: function () {
        return 'You logged as ' + USER_NAME + '  ';
    }
});
