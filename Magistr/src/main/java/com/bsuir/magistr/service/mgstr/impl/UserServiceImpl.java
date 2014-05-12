package com.bsuir.magistr.service.mgstr.impl;

import com.bsuir.magistr.dao.UserDAO;
import com.bsuir.magistr.json.wrapper.UserWrapper;
import com.bsuir.magistr.service.mgstr.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * User: RomanYukhnevich
 * Date: 10/30/13
 * Time: 5:39 PM
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Autowired
    public UserDetailsManager userDetailsManager;

    @Override
    public List<UserWrapper> findAllUsers(Integer limit, Integer start) {
        List<String> usernames = userDAO.findAllUsers(limit,start);
        List<UserWrapper> users = new ArrayList<UserWrapper>();
        for(String username:usernames) {
            users.add(wrap(userDetailsManager.loadUserByUsername(username)));
        }
        return users;
    }

    @Override
    public void addUser(String username, String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        password = encoder.encode(password);
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add( new SimpleGrantedAuthority("ROLE_USER"));
        UserDetails user = new User(username,password,authorities);
        userDetailsManager.createUser(user);
    }

    @Override
    public void deleteUser(UserDetails user) {
        userDetailsManager.deleteUser(user.getUsername());
    }

    @Override
    public void updateUser(UserDetails user) {
        userDetailsManager.updateUser(user);
    }

    @Override
    public boolean userExists(String username) {
        return userDetailsManager.userExists(username);
    }

    @Override
    public Integer getQuantity() {
        return userDAO.getQuantity();
    }

    public UserWrapper wrap(UserDetails user) {
        UserWrapper userWrapper = new UserWrapper();
        userWrapper.setUsername(user.getUsername());
        userWrapper.setPassword(user.getPassword());
        userWrapper.setAccountNonExpired(true);
        userWrapper.setAccountNonLocked(true);
        userWrapper.setCredentialsNonExpired(true);
        userWrapper.setEnabled(user.isEnabled());
        String role = user.getAuthorities().iterator().next().getAuthority();
        userWrapper.setAuthority(role);
        return userWrapper;
    }
}
