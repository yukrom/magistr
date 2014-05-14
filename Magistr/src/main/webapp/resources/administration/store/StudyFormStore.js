/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.administration.store.StudyFormStore', {
    extend: 'Ext.data.Store',
    storeId: 'studyFormStore',
    model: 'Magistr.administration.model.SimpleMapModel',
    proxy: {
        type: 'rest',
        url: STUDY_FORM_COMBO_URL,
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true
});
