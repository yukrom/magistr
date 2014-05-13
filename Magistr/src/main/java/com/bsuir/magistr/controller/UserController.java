package com.bsuir.magistr.controller;

import com.bsuir.magistr.domain.RoleTypes;
import com.bsuir.magistr.json.wrapper.UserWrapper;
import com.bsuir.magistr.json.wrapper.UsersWrapper;
import com.bsuir.magistr.service.mgstr.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * User: RomanYukhnevich
 * Date: 10/28/13
 * Time: 11:24 AM
 */

@Controller
public class UserController {
    public final String BASE_URL = "/";
    public final String ADD_URL = "/user/add";
    public final String LOGIN_URL = "/login";
    public final String LOGIN_ERROR = "User with this username is already exist. Please use another username.";
    public final String USERS_URL = "/users";
    public final String ROLES_URL = "/roles";

    @Autowired
    private UserService userService;

    @RequestMapping(value = BASE_URL, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String home() {
        return "redirect:login";
    }

    @RequestMapping(value = LOGIN_URL, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String login(Model model) {
        model.addAttribute("error", "");
        return "login";
    }

    @RequestMapping(value = LOGIN_URL, params = "auth=failed", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String error(Model model) {
        model.addAttribute("error", LOGIN_ERROR);
        return "login";
    }

    /*RequestMapping@RequestMapping(value= ROLES_URL, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @Secured("ROLE_ADMIN")
    public String getRoles() {
        return RoleTypes.;
    }*/

    /*@RequestMapping(value= REGISTER_URL,method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String register(Model model) {
        model.addAttribute("error", "");
        return "register";
    }*/

    @RequestMapping(value= ADD_URL,method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public Map<String,String> newUser(String username, String password, String role) {
        if(userService.userExists(username)) {
            Map<String,String> map = new HashMap<String,String>();
            map.put("message","Пользователь с таким именем существует в системе!");
            return map;
        } else {
            userService.addUser(username,password,role);
            Map<String,String> map = new HashMap<String,String>();
            map.put("message","Пользователь создан!");
            return map;
        }
    }

    @RequestMapping(value = USERS_URL, method = RequestMethod.GET)
    @Secured("ROLE_ADMIN")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public UsersWrapper getUserList(Integer limit, Integer start) {
        return new UsersWrapper(userService, userService.findAllUsers(limit, start));
    }


    @RequestMapping(value = USERS_URL, method = RequestMethod.PUT)
    @Secured("ROLE_ADMIN")
    @ResponseStatus(HttpStatus.OK)
    public void updateUser(@RequestBody UserWrapper userWrapper) {
        userService.updateUser(userWrapper.getUser());
    }

    @RequestMapping(value = USERS_URL, method = RequestMethod.DELETE)
    @Secured("ROLE_ADMIN")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public void deleteUser(@RequestBody UserWrapper userWrapper) {
        userService.deleteUser(userWrapper.getUser());
    }
}
