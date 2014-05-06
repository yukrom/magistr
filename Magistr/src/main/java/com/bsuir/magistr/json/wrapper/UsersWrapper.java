package com.bsuir.magistr.json.wrapper;

import com.bsuir.magistr.service.news.UserService;
import org.codehaus.jackson.annotate.JsonProperty;

import java.util.List;

/**
 * User: RomanYukhnevich
 * Date: 10/31/13
 * Time: 2:42 PM
 */
public class UsersWrapper {

    private Integer totalCount;

    private List<UserWrapper> users;

    public UsersWrapper(UserService userService,List<UserWrapper> users) {
        this.totalCount = userService.getQuantity();
        this.users = users;
    }

    @JsonProperty(value = "totalCount")
    public Integer getTotalCount() {
        return totalCount;
    }

    @JsonProperty(value = "users")
    public List<UserWrapper> getUsers() {
        return users;
    }
}
