package com.bsuir.magistr.service.mgstr;

import com.bsuir.magistr.json.wrapper.UserWrapper;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

/**
 * User: RomanYukhnevich
 * Date: 10/30/13
 * Time: 5:35 PM
 */
public interface UserService {

    public List<UserWrapper> findAllUsers(Integer limit, Integer start);

    public void addUser(String username, String password, String role);

    public void deleteUser(UserDetails user);

    public void updateUser(UserDetails user);

    public boolean userExists(String username);

    public Integer getQuantity();

}
