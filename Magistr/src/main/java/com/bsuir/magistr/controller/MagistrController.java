package com.bsuir.magistr.controller;

import com.bsuir.magistr.domain.Magistr;
import com.bsuir.magistr.service.mgstr.MagistrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Roma on 07.05.2014.
 */
@Controller
public class MagistrController {
    private final static String REGISTER_MAGISTR_PATH = "/register";

    @Autowired
    private MagistrService magistrService;

    @RequestMapping(value= REGISTER_MAGISTR_PATH, method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    @Secured({"ROLE_ANONYMOUS","ROLE_ADMIN","ROLE_USER"})
    public void addMagistr(@RequestBody Magistr magistr){
        magistrService.addMagistr(magistr);
    }

    @RequestMapping(value= REGISTER_MAGISTR_PATH, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String register() {
        return "register";
    }
}
