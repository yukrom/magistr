/**
 * User: RomanYukhnevich
 * Date: 10/18/13
 * Time: 3:51 PM
 */
Ext.define('News.store.NewsStore',{
    extend: 'Ext.data.Store',
    model: 'News.model.NewsModel',
    proxy: {
        type: 'rest',
        storeId: 'newsStore',
        url: NEWS_URL,
        extraParams: {
            category: "politics"
        },
        reader: {
            type: 'json',
            root: 'magistr',
            totalProperty: 'totalCount'
        }
    },
    autoLoad: true,
    autoSync: true,
    pageSize: 10
})
