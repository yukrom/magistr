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
                width: 1000,
                height: '100%',
                bodyPadding: 5,
                jsonSubmit: true,
                layout: 'hbox',
                url: 'http://localhost:8080/magistr/register',
                method: 'POST',
                items: [
                    {
                        xtype: 'container',
                        flex: 4,
                        height: '100%',
                        items: [
                            {
                                xtype: 'fieldset',
                                title: 'Персональные данные',
                                collapsible: true,
                                defaultType: 'textfield',
                                defaults: {
                                    blankText: 'Поле обязательно для заполнения',
                                    anchor: '100%'
                                },
                                layout: 'anchor',
                                items: [
                                    {
                                        fieldLabel: 'Фамилия<font color="red">*</font> ',
                                        name: 'magName1',
                                        allowBlank: false,
                                        regex: new RegExp('\\D+'),
                                        regexText: 'Поле должно содержать только буквы'
                                    },
                                    {
                                        fieldLabel: 'Имя<font color="red">*</font> ',
                                        name: 'magName2',
                                        allowBlank: false,
                                        regex: new RegExp('\\D+'),
                                        regexText: 'Поле должно содержать только буквы'
                                    },
                                    {
                                        fieldLabel: 'Отчество<font color="red">*</font> ',
                                        name: 'magName3',
                                        allowBlank: false,
                                        regex: new RegExp('\\D+'),
                                        regexText: 'Поле должно содержать только буквы'
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Гражданство<font color="red">*</font> ',
                                        name: 'idMagCit',
                                        allowBlank: false,
                                        store: Ext.create('Magistr.registration.store.CitizenStore'),
                                        queryMode: 'local',
                                        displayField: 'name',
                                        valueField: 'id'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'Контактный телефон в формате +375XXXXXXXXX',
                                collapsible: true,
                                defaultType: 'textfield',
                                defaults: {
                                    blankText: 'Поле обязательно для заполнения',
                                    anchor: '100%'
                                },
                                layout: 'anchor',
                                items: [
                                    {
                                        fieldLabel: 'Мобильный<font color="red">*</font> ',
                                        name: 'phone',
                                        allowBlank: false,
                                        regex: new RegExp('(\\+375)(?=29|33|44)(\\d{9})'),
                                        regexText: 'Введите номер в формате +375XXXXXXXXX'
                                    },
                                    {
                                        fieldLabel: 'Домашний<font color="red">*</font> ',
                                        name: 'homePhone',
                                        allowBlank: false,
                                        regex: new RegExp('\\+375\\d+'),
                                        regexText: 'Введите номер в формате +375XXXXXXXXX'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'Данные для отправки уведомлений',
                                collapsible: true,
                                defaultType: 'textfield',
                                defaults: {
                                    blankText: 'Поле обязательно для заполнения',
                                    anchor: '100%'
                                },
                                layout: 'anchor',
                                items: [
                                    {
                                        fieldLabel: 'Email<font color="red">*</font>',
                                        name: 'email',
                                        allowBlank: false,
                                        vtype: 'email'
                                    },
                                    {
                                        fieldLabel: 'Почтовый индекс<font color="red">*</font> ',
                                        name: 'adresInd',
                                        allowBlank: false,
                                        regex: new RegExp('\\d+'),
                                        regexText: 'Индекс должен содержать только цифры'
                                    },
                                    {
                                        fieldLabel: 'Город<font color="red">*</font> ',
                                        name: 'adresGrd',
                                        allowBlank: false,
                                        regex: new RegExp('\\D+'),
                                        regexText: 'Поле должно содержать только буквы'
                                    },
                                    {
                                        fieldLabel: 'Улица<font color="red">*</font> ',
                                        name: 'adresStr',
                                        allowBlank: false,
                                        regex: new RegExp('\\D+'),
                                        regexText: 'Поле должно содержать только буквы'
                                    },
                                    {
                                        fieldLabel: 'Номер дома<font color="red">*</font> ',
                                        name: 'adresHs',
                                        allowBlank: false
                                    },
                                    {
                                        fieldLabel: 'Номер квартиры<font color="red">*</font> ',
                                        name: 'adresFl',
                                        allowBlank: false,
                                        regex: new RegExp('\\d+'),
                                        regexText: 'Поле должно содержать только цифры'
                                    }

                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 7,
                        height: '100%',
                        margin: '0 0 0 10',
                        items: [
                            {
                                xtype: 'fieldset',
                                title: 'Данные для поступления',
                                collapsible: true,
                                defaultType: 'textfield',
                                defaults: {
                                    blankText: 'Поле обязательно для заполнения',
                                    anchor: '100%',
                                    labelWidth: 220
                                },
                                layout: 'anchor',
                                items: [
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Предполагаемая специальность магистратуры<font color="red">*</font> ',
                                        name: 'idSpecGroup',
                                        allowBlank: false,
                                        store: Ext.create('Magistr.registration.store.SpecStore'),
                                        queryMode: 'local',
                                        displayField: 'specFullName',
                                        valueField: 'specShifr'
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Форма обучения в магистратуре (очное/заочное)<font color="red">*</font> ',
                                        name: 'idFrmObuch',
                                        allowBlank: false,
                                        store: Ext.create('Magistr.registration.store.StudyFormStore'),
                                        queryMode: 'local',
                                        displayField: 'name',
                                        valueField: 'id'
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Форма обучения в магистратуре (платное/бюджет)<font color="red">*</font> ',
                                        name: 'idPlat',
                                        allowBlank: false,
                                        store: Ext.create('Magistr.registration.store.PaidTypeStore'),
                                        queryMode: 'local',
                                        displayField: 'name',
                                        valueField: 'id'
                                    },
                                    {
                                        fieldLabel: 'Научных трудов<font color="red">*</font> ',
                                        name: 'nauchTrud',
                                        allowBlank: false
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Иностранный язык (основной, который изучался ранее)<font color="red">*</font> ',
                                        name: 'idInostrLang',
                                        allowBlank: false,
                                        store: Ext.create('Magistr.registration.store.LanguageStore'),
                                        queryMode: 'local',
                                        displayField: 'name',
                                        valueField: 'id'
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'УВО первой ступени (аббревиатура университета)<font color="red">*</font> ',
                                        name: 'idVuz',
                                        allowBlank: false,
                                        store: Ext.create('Magistr.registration.store.VuzStore'),
                                        queryMode: 'local',
                                        displayField: 'name',
                                        valueField: 'id'
                                    },
                                    {
                                        fieldLabel: '<a href="/magistr/resources/static/Specialnosti.pdf" target="_blank">Cпециальность первой ступени ВО (шифр)</a><br>в формате 1-NN NN NN-NN<font color="red">*</font> ',
                                        name: 'spec1Stup',
                                        allowBlank: false
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Форма обучения первой ступени (очное/заочное)<font color="red">*</font> ',
                                        name: 'idFrmObuch1',
                                        allowBlank: false,
                                        store: Ext.create('Magistr.registration.store.StudyFormStore'),
                                        queryMode: 'local',
                                        displayField: 'name',
                                        valueField: 'id'
                                    },
                                    {
                                        xtype: 'combo',
                                        fieldLabel: 'Форма обучения на первой ступени (платное/бюджет)<font color="red">*</font> ',
                                        name: 'idPlat1',
                                        allowBlank: false,
                                        store: Ext.create('Magistr.registration.store.PaidTypeStore'),
                                        queryMode: 'local',
                                        displayField: 'name',
                                        valueField: 'id'
                                    },
                                    {
                                        fieldLabel: 'Год окончания первой ступени УВО<font color="red">*</font> ',
                                        name: 'godVyp',
                                        allowBlank: false,
                                        regex: new RegExp('\\d{4}'),
                                        regexText: 'Поле должно содержать только цифры'
                                    }
                                ]
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
                    text: 'Зарегистрироваться',
                    formBind: true, //only enabled once the form is valid
                    disabled: true,
                    handler: function() {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            form.submit({
                                success: function(form, action) {
                                    Ext.Msg.alert('Информация', 'Вы успешно зарегистрированы.');
                                    form.reset();
                                },
                                failure: function(form, action) {
                                    Ext.Msg.alert('Ошибка', 'Ошибка сервера. Попробуйте зарегистрироваться позже.');
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
