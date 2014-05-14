package com.bsuir.magistr.controller;

import com.bsuir.magistr.domain.Magistr;
import com.bsuir.magistr.service.mgstr.MagistrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Roma on 07.05.2014.
 */
@Controller
public class MagistrController {
    private final static String ADMINISTRATION_URL = "/administration";
    private final static String REGISTER_MAGISTR_PATH = "/register";
    private final static String GET_MAGISTR_PATH = "list";

    @Autowired
    private MagistrService magistrService;

    @RequestMapping(value= ADMINISTRATION_URL, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    /*@Secured({"ROLE_ADMIN","ROLE_USER"})*/
    public String getIndex(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        List<GrantedAuthority> role = (List) auth.getAuthorities();
        model.addAttribute("role", role.get(0).getAuthority());
        model.addAttribute("username", name);
        return "administration";
    }

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

    @RequestMapping(value = GET_MAGISTR_PATH, method = RequestMethod.GET, produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public List<Magistr> getList() {
        return magistrService.getMagistr();
    }
}
