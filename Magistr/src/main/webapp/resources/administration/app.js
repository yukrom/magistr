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
    /*controllers: ['MainController'],*/
    views: ['grid.UsersGrid', 'grid.MagistrGrid', 'form.MagistrForm'],
    stores: ['UsersStore', 'MagistrStore', 'CitizenStore', 'KafedraStore', 'LanguageStore', 'PaidTypeStore', 'SpecStore', 'StudyFormStore', 'VuzStore'],
    models: ['UsersModel', 'MagistrModel', 'KafedraModel', 'SimpleMapModel', 'SpecModel', 'VuzModel'],
    launch: function () {
        Ext.create('Magistr.administration.view.AdministrationViewport');
    }
});
