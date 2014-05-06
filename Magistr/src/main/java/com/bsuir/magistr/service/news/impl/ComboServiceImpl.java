package com.bsuir.magistr.service.news.impl;

import com.bsuir.magistr.dao.ComboDAO;
import com.bsuir.magistr.domain.*;
import com.bsuir.magistr.service.news.ComboService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Roma on 05.05.2014.
 */

@Service
public class ComboServiceImpl implements ComboService {

    @Autowired
    private ComboDAO comboDAO;

    @Override
    public List<Citizen> getCitizen() {
        return comboDAO.getCitizen();
    }

    @Override
    public List<StudyForm> getStudyForm() {
        return comboDAO.getStudyForm();
    }

    @Override
    public List<Language> getLanguages() {
        return comboDAO.getLanguages();
    }

    @Override
    public List<Kafedra> getKafedras() {
        return comboDAO.getKafedras();
    }

    @Override
    public List<PaidType> getPaidTypes() {
        return comboDAO.getPaidTypes();
    }

    @Override
    public List<Spec> getSpecs() {
        return comboDAO.getSpecs();
    }

    @Override
    public List<Vuz> getVuz() {
        return comboDAO.getVuz();
    }
}
