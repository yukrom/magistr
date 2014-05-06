/**
 * User: RomanYukhnevich
 * Date: 10/16/13
 * Time: 6:35 PM
 */
Ext.define('Magistr.registration.view.RegistrationViewport',{
    extend: 'Ext.container.Viewport',
    alias: 'viewport.registr',

    initComponent: function() {
        var me = this;
        Ext.apply(me,{
            layout: 'hbox',
            items: [{
                xtype: 'form',
                title: 'Регистрация поступающего в магистратуру',
                width: 400,
                bodyPadding: 5,
                layout: 'anchor',
                url: 'http://localhost:8080/magistr/add',
                method: 'POST',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'fieldset',
                        columnWidth: 0.5,
                        title: 'Персональные данные',
                        collapsible: true,
                        defaultType: 'textfield',
                        defaults: {anchor: '100%'},
                        layout: 'anchor',
                        items: [
                            {
                                fieldLabel: 'Фамилия',
                                name: 'mag_name1',
                                allowBlank: false
                            },
                            {
                                fieldLabel: 'Имя',
                                name: 'mag_name2',
                                allowBlank: false
                            },
                            {
                                fieldLabel: 'Отчество',
                                name: 'mag_name3',
                                allowBlank: false
                            },
                            {
                                xtype: 'combo',
                                fieldLabel: 'Гражданство',
                                name: 'id_mag_cit',
                                store: Ext.create('Magistr.registration.store.CitizenStore'),
                                queryMode: 'local',
                                displayField: 'name',
                                valueField: 'id'
                            }
                        ]
                    }
                ],
                buttons: [{
                    text: 'Очистить',
                    handler: function() {
                        this.up('form').getForm().reset();
                    }
                }, {
                    text: 'Войти',
                    formBind: true, //only enabled once the form is valid
                    disabled: true,
                    handler: function() {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            Ext.Ajax.request({
                                url: this.url,
                                params: this.getForm().getValues(true),
                                success: function(response){
                                    var text = response.responseText;
                                    // process server response here
                                },
                                failure: function(response){
                                    var text = response.responseText;
                                    // process server response here
                                }
                            });
                        }
                    }
                }]
            }]
        });
        me.callParent(arguments);
    }
});
