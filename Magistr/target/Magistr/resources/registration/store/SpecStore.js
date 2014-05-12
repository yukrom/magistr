/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.registration.store.SpecStore',{
    extend: 'Ext.data.Store',
    storeId: 'specStore',
    model: 'Magistr.registration.model.SpecModel',
    proxy: {
        type: 'rest',
        url: SPEC_COMBO_URL,
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true
});
