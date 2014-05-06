package com.bsuir.magistr.service.news;

import com.bsuir.magistr.domain.*;

import java.util.List;

/**
 * Created by Roma on 05.05.2014.
 */

public interface ComboService {
    public List<Citizen> getCitizen();
    public List<StudyForm> getStudyForm();
    public List<Language> getLanguages();
    public List<Kafedra> getKafedras();
    public List<PaidType> getPaidTypes();
    public List<Spec> getSpecs();
    public List<Vuz> getVuz();
}
