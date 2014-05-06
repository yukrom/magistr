/**
 * User: RomanYukhnevich
 * Date: 10/16/13
 * Time: 6:34 PM
 */
Ext.Loader.setPath('News','/magistr/resources/administration');
//Ext.Loader.setPath('Ext.ux', 'app/ux/');
Ext.application({
    name: 'News',
    appFolder: '/magistr/resources/administration',
    models: ['NewsModel','CommentsModel','UsersModel'],
    stores: ['NewsStore','CommentsStore','UsersStore'],
    views: ['grid.NewsPreviewGrid','grid.CommentsGrid','MainContent','NewsContentPanel','Tools','grid.UsersGrid'],
    controllers: ['NewsTabController', 'NewsContentController', 'NewsOperationsController','UsersController'],
    launch: function() {
        Ext.create('News.view.NewsViewport');
    }
});
