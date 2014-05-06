/**
 * User: RomanYukhnevich
 * Date: 10/21/13
 * Time: 5:37 PM
 */
/**
 * User: RomanYukhnevich
 * Date: 10/21/13
 * Time: 12:13 PM
 */
Ext.define('News.controller.NewsContentController', {
    extend: 'Ext.app.Controller',
    scope: this,
    refs: [
        {
            ref: 'newsPreviewGrid',
            selector: '#magistr-preview-grid'
        },
        {
            ref: 'newsTabPanel',
            selector: '#magistr-tabpanel'
        }
    ],
    init: function () {
        var me = this;
        me.control({
            '#news-preview-grid': {
                itemdblclick: function() {
                    grid = me.getNewsPreviewGrid();
                    tabpanel = me.getNewsTabPanel();
                    selection = grid.getSelectionModel().getSelection();
                    record = selection[0].data;
                    store = Ext.create('News.store.CommentsStore');
                    store.getProxy().setExtraParam('newsId',record.id);
                    tab = me.addNewsContentTab(record.title,me.addNewsContentPanel(record.content,record.id));
                    tabpanel.add(tab);
                    tabpanel.setActiveTab(tabpanel.items.length - 1);
                }
            }
        })
    },
    addNewsContentTab: function(title,items) {
        var tab = {
            title: title,
            closable: true,
            border: false,
            autoScroll: true,
            height: 1000,
            items: items
        }
        return tab;
    },
    addNewsContentPanel: function(content,id) {
        var itm = [ ];
        var me = this;
        var panel = {
            xtype: 'contentpanel',
            items: [{
                xtype: 'panel',
                frame: false,
                border: false,
                autoScroll: true,
                height: 700,
                bodyCls: 'magistr-content',
                html: content
            },me.addCommentsGrid(id)]
        }
        itm[0] = panel;
        return itm;
    },
    addCommentsGrid: function(id) {
        if(ROLE == 'ROLE_ADMIN' || ROLE == 'ROLE_USER') {
            return {
                xtype: 'commentsgrid',
                newsId: id
            };
        } else {
            return null;
        }
    }
});

