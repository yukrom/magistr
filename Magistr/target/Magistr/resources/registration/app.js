/**
 * User: RomanYukhnevich
 * Date: 10/16/13
 * Time: 6:34 PM
 */
Ext.Loader.setPath('Magistr.registration','/magistr/resources/registration');
//Ext.Loader.setPath('Ext.ux', 'app/ux/');
Ext.application({
    name: 'Magistr.registration',
    appFolder: '/magistr/resources/registration',
    launch: function() {
        Ext.create('Magistr.registration.view.RegistrationViewport');
    }
});
