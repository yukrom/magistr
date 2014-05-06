/**
 * User: RomanYukhnevich
 * Date: 10/30/13
 * Time: 7:38 PM
 */

/**
 * User: RomanYukhnevich
 * Date: 10/21/13
 * Time: 12:13 PM
 */
Ext.define('News.controller.UsersController', {
    extend: 'Ext.app.Controller',
    scope: this,
    refs: [
        {
            ref: 'manageBut',
            selector: '#manage-users-but'
        }


    ],
    init: function () {
        var me = this;
        me.control({
            '#manage-users-but': {
                click: function() {
                    me.addManageUsersDialog();
                }
            }
        })
    },

    addManageUsersDialog: function() {
        Ext.create('Ext.window.Window', {
            title: 'Manage users',
            id: 'users-dialog',
            width: 1000,
            items: [{
                xtype: 'usersgrid'
            }]
        }).show();
    }

});

