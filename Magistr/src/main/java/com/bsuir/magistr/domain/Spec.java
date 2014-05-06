package com.bsuir.magistr.domain;

/**
 * Created by Roma on 05.05.2014.
 */

public class Spec {
    private Integer id;
    private Integer kafId;
    private String specName;
    private String specFullName;
    private String specShifr;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getKafId() {
        return kafId;
    }

    public void setKafId(Integer kafId) {
        this.kafId = kafId;
    }

    public String getSpecName() {
        return specName;
    }

    public void setSpecName(String specName) {
        this.specName = specName;
    }

    public String getSpecFullName() {
        return specFullName;
    }

    public void setSpecFullName(String specFullName) {
        this.specFullName = specFullName;
    }

    public String getSpecShifr() {
        return specShifr;
    }

    public void setSpecShifr(String specShifr) {
        this.specShifr = specShifr;
    }
}
