/**
 * Created by Roma on 13.05.2014.
 */

Ext.define('Magistr.administration.store.MagistrStore',{
    extend: 'Ext.data.Store',
    storeId: 'magistrStore',
    model: 'Magistr.administration.model.MagistrModel',
    proxy: {
        type: 'ajax',
        url: MAGISTR_URL,
        reader: {
            type: 'json',
            root: '',
            totalProperty: 'totalCount'
        }
    },
    autoLoad: true,
    autoSync: true,
    pageSize: 10
});
