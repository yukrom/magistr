/**
 * Created by Roma on 05.05.2014.
 */
Ext.define('Magistr.administration.model.SpecModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'specName'},
        {name: 'specFullName'},
        {name: 'specShifr'},
        {name: 'kafId'}
    ]
});