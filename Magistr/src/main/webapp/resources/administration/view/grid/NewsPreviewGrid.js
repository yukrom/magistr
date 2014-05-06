/**
 * User: RomanYukhnevich
 * Date: 10/18/13
 * Time: 2:58 PM
 */
Ext.define('News.view.grid.NewsPreviewGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'previewgrid',
    layout: 'anchor',
    id: 'magistr-preview-grid',
    title: 'Politics magistr',
    columnLines: false,
    loadMask: true,
    forceFit: true,
    autoScroll: true,
    initComponent: function () {
        var me = this;
        var store = new News.store.NewsStore();
        Ext.apply(me, {
            store: store,
            columns: [
                {text: 'Title', dataIndex: 'title', flex: 2},
                {text: 'Date', dataIndex: 'date', maxWidth: 200, xtype: 'datecolumn', format: 'm/d/Y H:i'}
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: store,
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
            tbar: me.addToolbar()
        });
        me.callParent(arguments);
    },
    addToolbar: function() {
        if(ROLE == 'ROLE_ADMIN') {
            return [
                {
                    xtype: 'button',
                    text: 'Add',
                    icon: ADD_ICON,
                    id: 'add-magistr-but'
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    icon: EDIT_ICON,
                    id: 'edit-magistr-but'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    icon: DELETE_ICON,
                    id: 'delete-magistr-but'
                }
            ];
        } else {
            return null;
        }

    }
})
