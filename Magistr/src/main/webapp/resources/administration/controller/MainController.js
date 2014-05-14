/**
 * User: RomanYukhnevich
 * Date: 14.05.2014
 * Time: 4:45
 */

Ext.define('News.controller.MainController', {
    extend: 'Ext.app.Controller',
    scope: this,
    refs: [
        {
            ref: 'magistrGrid',
            selector: '#magistr-grid'
        },
        {
            ref: 'magistrForm',
            selector: '#magistr-form'
        }


    ],
    init: function () {
        var me = this;
        me.control({
            '#magistr-grid': {
                cellclick: function (grid, td, cellIndex, record, tr, rowIndex, e) {
                    var form = me.getMagistrForm();
                    form.getForm().loadRecord(record);
                    grid.collapse();
                    form.expand();
                }
            }
        });
    }
});
