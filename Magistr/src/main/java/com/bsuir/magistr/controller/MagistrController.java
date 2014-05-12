package com.bsuir.magistr.controller;

import com.bsuir.magistr.domain.Citizen;
import com.bsuir.magistr.domain.Magistr;
import com.bsuir.magistr.service.news.MagistrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Roma on 07.05.2014.
 */
public class MagistrController {
    private final static String REGISTER_MAGISTR_PATH = "register";

    @Autowired
    private MagistrService magistrService;

    @RequestMapping(value= REGISTER_MAGISTR_PATH, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public void addMagistr(@RequestBody Magistr magistr){
        magistrService.addMagistr(magistr);
    }
}
