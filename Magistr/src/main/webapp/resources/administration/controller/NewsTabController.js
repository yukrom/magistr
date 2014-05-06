/**
 * User: RomanYukhnevich
 * Date: 10/21/13
 * Time: 12:13 PM
 */
Ext.define('News.controller.NewsTabController', {
    extend: 'Ext.app.Controller',
    scope: this,
    refs: [
        {
            ref: 'politicsBut',
            selector: '#politics-but'
        },
        {
            ref: 'autoBut',
            selector: '#auto-but'
        },
        {
            ref: 'cultBut',
            selector: '#cult-but'
        },
        {
            ref: 'newsPreviewGrid',
            selector: '#magistr-preview-grid'
        },
        {
            ref: 'searchBut',
            selector: '#search-but'
        },
        {
            ref: 'keyField',
            selector: '#search-key'
        }


    ],
    init: function () {
        var me = this;
        me.control({
           '#politics-but': {
                click: function() {
                    grid = me.getNewsPreviewGrid();
                    button = me.getPoliticsBut();
                    grid.setTitle(button.getText());
                    store = grid.getStore();
                    store.getProxy().url = NEWS_URL;
                    store.getProxy().setExtraParam('category','politics');
                    store.reload();
                }
            },
            '#auto-but': {
                click: function() {
                    grid = me.getNewsPreviewGrid();
                    button = me.getAutoBut();
                    grid.setTitle(button.getText());
                    store = grid.getStore();
                    store.getProxy().url = NEWS_URL;
                    store.getProxy().setExtraParam('category','auto');
                    store.reload();
                }
            },
            '#cult-but': {
                click: function() {
                    grid = me.getNewsPreviewGrid();
                    button = me.getCultBut();
                    grid.setTitle(button.getText());
                    store = grid.getStore();
                    store.getProxy().url = NEWS_URL;
                    store.getProxy().setExtraParam('category','culture');
                    store.reload();
                }
            },
            '#search-but': {
                click: function() {
                    grid = me.getNewsPreviewGrid();
                    grid.setTitle('Search results:');
                    store = grid.getStore();
                    store.getProxy().url = SEARCH_URL;
                    keyField = me.getKeyField();
                    store.getProxy().setExtraParam('key',keyField.getValue());
                    store.reload();
                }
            }
        })
    }

});
