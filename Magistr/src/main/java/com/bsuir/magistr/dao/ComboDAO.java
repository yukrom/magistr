package com.bsuir.magistr.dao;

import com.bsuir.magistr.domain.*;

import java.util.List;

public interface ComboDAO {
    public List<Citizen> getCitizen();
    public List<StudyForm> getStudyForm();
    public List<Language> getLanguages();
    public List<Kafedra> getKafedras();
    public List<PaidType> getPaidTypes();
    public List<Spec> getSpecs();
    public List<Vuz> getVuz();
}
