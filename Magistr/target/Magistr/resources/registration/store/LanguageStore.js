/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.registration.store.LanguageStore',{
    extend: 'Ext.data.Store',
    storeId: 'languageStore',
    model: 'Magistr.registration.model.SimpleMapModel',
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