/**
 * User: RomanYukhnevich
 * Date: 10/16/13
 * Time: 6:34 PM
 */
Ext.Loader.setPath('Magistr.administration', '/magistr/resources/administration');
//Ext.Loader.setPath('Ext.ux', 'app/ux/');
Ext.application({
    name: 'Magistr.administration',
    appFolder: '/magistr/resources/administration',
    launch: function () {
        Ext.create('Magistr.administration.view.AdministrationViewport');
    }
});
