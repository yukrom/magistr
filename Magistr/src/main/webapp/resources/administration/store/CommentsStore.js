/**
 * User: RomanYukhnevich
 * Date: 10/21/13
 * Time: 1:23 PM
 */
Ext.define('News.store.CommentsStore',{
    extend: 'Ext.data.Store',
    storeId: 'commentsStore',
    model: 'News.model.CommentsModel',
    proxy: {
        type: 'rest',
        url: COMMENTS_URL,
        reader: {
            type: 'json',
            root: 'comments',
            totalProperty: 'totalCount'
        }
    },
    autoLoad: false,
    autoSync: true,
    pageSize: 10
})
