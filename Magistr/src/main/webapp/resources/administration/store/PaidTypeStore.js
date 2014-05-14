/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.administration.store.PaidTypeStore', {
    extend: 'Ext.data.Store',
    storeId: 'paidTypeStore',
    model: 'Magistr.administration.model.SimpleMapModel',
    proxy: {
        type: 'rest',
        url: PAID_TYPES_COMBO_URL,
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true
});
