/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.administration.store.CitizenStore', {
    extend: 'Ext.data.Store',
    storeId: 'citizenStore',
    model: 'Magistr.administration.model.SimpleMapModel',
    proxy: {
        type: 'rest',
        url: CITIZEN_COMBO_URL,
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true
});
