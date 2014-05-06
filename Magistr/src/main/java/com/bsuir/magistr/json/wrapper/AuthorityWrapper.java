package com.bsuir.magistr.json.wrapper;

import org.codehaus.jackson.annotate.JsonProperty;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

/**
 * User: RomanYukhnevich
 * Date: 10/31/13
 * Time: 1:46 PM
 */
public class AuthorityWrapper {

    @JsonProperty(value = "authority")
    private  String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public GrantedAuthority getAuthority() {
        return new SimpleGrantedAuthority(role);
    }
}
