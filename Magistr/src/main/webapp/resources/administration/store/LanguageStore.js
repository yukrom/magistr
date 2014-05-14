/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.administration.store.LanguageStore', {
    extend: 'Ext.data.Store',
    storeId: 'languageStore',
    model: 'Magistr.administration.model.SimpleMapModel',
    proxy: {
        type: 'rest',
        url: LANGUAGE_COMBO_URL,
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true
});