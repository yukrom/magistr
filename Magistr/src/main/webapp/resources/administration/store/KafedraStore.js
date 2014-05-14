/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.administration.store.KafedraStore', {
    extend: 'Ext.data.Store',
    storeId: 'kafedraStore',
    model: 'Magistr.administration.model.KafedraModel',
    proxy: {
        type: 'rest',
        url: KAFEDRA_COMBO_URL,
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true
});
