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
                title: 'Войти в панель администратора',
                width: 400,
                bodyPadding: 5,
                layout: 'anchor',
                url: 'http://localhost:8080/magistr/j_spring_security_check',
                method: 'POST',
                defaults: {
                    anchor: '100%'
                },
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'Логин',
                    name: 'j_username',
                    allowBlank: false
                },{
                    fieldLabel: 'Пароль',
                    fieldType: 'password',
                    name: 'j_password',
                    allowBlank: false
                }],
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
