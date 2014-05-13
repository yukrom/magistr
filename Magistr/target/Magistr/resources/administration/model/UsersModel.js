/**
 * User: RomanYukhnevich
 * Date: 10/30/13
 * Time: 7:11 PM
 */

Ext.define('Magistr.administration.model.UsersModel',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'password',  type: 'string'},
        {name: 'username',  type: 'string'},
        {name: 'enabled',  type: 'boolean'},
        {name: 'accountNonExpired',  type: 'boolean'},
        {name: 'accountNonLocked',  type: 'boolean'},
        {name: 'credentialsNonExpired',  type: 'boolean'},
        {name: 'authority', type: 'string'}

    ]
});
