/**
 * User: RomanYukhnevich
 * Date: 10/30/13
 * Time: 7:16 PM
 */
Ext.define('Magistr.administration.store.UsersStore',{
    extend: 'Ext.data.Store',
    storeId: 'usersStore',
    model: 'Magistr.administration.model.UsersModel',
    proxy: {
        type: 'rest',
        url: USERS_URL,
        reader: {
            type: 'json',
            root: 'users',
            totalProperty: 'totalCount'

        }
    },
    autoLoad: true,
    autoSync: true,
    pageSize: 10
});
