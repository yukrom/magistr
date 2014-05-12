package com.bsuir.magistr.domain;

/**
 * Created by Roma on 13.05.2014.
 */
public enum RoleTypes {
    ROLE_ADMIN("ADMIN"),ROLE_USER("USER");

    private String name;

    private RoleTypes(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
