/**
 * User: RomanYukhnevich
 * Date: 10/21/13
 * Time: 1:25 PM
 */
Ext.define('News.model.CommentsModel',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'newsId', type: 'int'},
        {name: 'author',  type: 'string'},
        {name: 'date',  type: 'string'},
        {name: 'comment',  type: 'string'}
    ]
})

