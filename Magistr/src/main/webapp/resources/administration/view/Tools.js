/**
 * User: RomanYukhnevich
 * Date: 10/16/13
 * Time: 7:15 PM
 */
Ext.define('News.view.Tools',{
    extend: 'Ext.panel.Panel',
    xtype: 'toolspanel',
    alias: 'panel.tools',
    title: 'Tools',
    width: 300,
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            items: [me.addMenu(), me.addAdminTools(), me.addSearchForm()]
        });
        me.callParent(arguments);
    },
    addMenu: function() {
        var menu = {
            xtype: 'panel',
            border: false,
            margin: '5 4 0 4',
            items: [{
                xtype: 'button',
                width: 290,
                margin: '1 0 0 0',
                id: 'politics-but',
                text: 'Politics magistr'
            },{
                xtype: 'button',
                width: 290,
                margin: '1 0 0 0',
                id: 'auto-but',
                text: 'Auto magistr'
            },{
                xtype: 'button',
                width: 290,
                margin: '1 0 0 0',
                id: 'cult-but',
                text: 'Culture magistr'
            }]
        };
        return menu;
    },
    addAdminTools: function() {
        if(ROLE == 'ROLE_ADMIN') {
            return {
                xtype: 'button',
                width: 290,
                id: 'manage-users-but',
                margin: '15 4 4 4',
                text: 'Manage users'
            }
        } else {
            return null;
        }
    },
    addSearchForm: function() {
        var search = {
            xtype: 'form',
            border: false,
            frame: true,
            title: 'Search',
            id: 'search-form',
            width: 290,
            margin: 5,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                id: 'search-key',
                name: 'key',
                allowBlank: false,
                margin: '4 4 4 4',
                maxLength: 30
            }],
            buttons: [{
                text: 'Search',
                id: 'search-but',
                formBind: true,
                disabled: true
            },{
                text: 'Cancel',
                id: 'search-cancel-but',
                handler: function() {
                    var form = this.up('form').getForm();
                    form.reset();
                }
            }]


        }
        return search;
    }

})
