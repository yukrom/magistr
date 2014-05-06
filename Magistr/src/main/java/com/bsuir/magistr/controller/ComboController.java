package com.bsuir.magistr.controller;

import com.bsuir.magistr.domain.*;
import com.bsuir.magistr.service.news.ComboService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

/**
 * Created by Roma on 05.05.2014.
 */

@Controller
public class ComboController {
    private final static String CITIZEN_COMBO_PATH = "citizen";
    private final static String KAFEDRA_COMBO_PATH = "kafedra";
    private final static String LANGUAGE_COMBO_PATH = "language";
    private final static String PAID_TYPES_COMBO_PATH = "paid/types";
    private final static String SPEC_COMBO_PATH = "spec";
    private final static String STUDY_FORM_COMBO_PATH = "study/form";
    private final static String VUZ_COMBO_PATH = "vuz";

    @Autowired
    private ComboService comboService;

    @RequestMapping(value= CITIZEN_COMBO_PATH,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<Citizen> getCitizen() {
        return comboService.getCitizen();
    }

    @RequestMapping(value= STUDY_FORM_COMBO_PATH,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<StudyForm> getStudyForm(){
        return comboService.getStudyForm();
    }

    @RequestMapping(value= LANGUAGE_COMBO_PATH,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<Language> getLanguages(){
        return comboService.getLanguages();
    }

    @RequestMapping(value= KAFEDRA_COMBO_PATH,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<Kafedra> getKafedras() {
        return comboService.getKafedras();
    }

    @RequestMapping(value= PAID_TYPES_COMBO_PATH,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<PaidType> getPaidTypes() {
        return comboService.getPaidTypes();
    }

    @RequestMapping(value= SPEC_COMBO_PATH,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<Spec> getSpecs() {
        return comboService.getSpecs();
    }

    @RequestMapping(value= VUZ_COMBO_PATH,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<Vuz> getVuz() {
        return comboService.getVuz();
    }

}
