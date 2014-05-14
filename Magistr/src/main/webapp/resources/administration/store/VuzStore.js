/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.administration.store.VuzStore', {
    extend: 'Ext.data.Store',
    storeId: 'vuzStore',
    model: 'Magistr.administration.model.VuzModel',
    proxy: {
        type: 'rest',
        url: VUZ_COMBO_URL,
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true
});
