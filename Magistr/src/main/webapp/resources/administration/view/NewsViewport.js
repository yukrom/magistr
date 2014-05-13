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
                    xtype: 'container',
                    id: 'login-info',
                    region: 'west',
                    margins: '0 0 5 0',
                    height: 30,
                    cls: 'x-panel-header-default',
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
                    xtype: 'maincontent',
                    region: 'center',
                    collapsible: false,
                    split: true
                }
            ]

        });
        me.callParent(arguments);
    },
    getLoginInfo: function () {
        return 'You logged as ' + USER_NAME + '  ';
    }
})
