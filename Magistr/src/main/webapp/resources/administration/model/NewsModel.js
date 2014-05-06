/**
 * User: RomanYukhnevich
 * Date: 10/18/13
 * Time: 3:59 PM
 */
Ext.define('News.model.NewsModel',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'title',  type: 'string'},
        {name: 'date',  type: 'string'},
        {name: 'content',  type: 'string'},
        {name: 'category', type: 'string'}
    ]
})
