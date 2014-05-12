package com.bsuir.magistr.service.news.impl;

import com.bsuir.magistr.dao.MagistrDAO;
import com.bsuir.magistr.domain.Magistr;
import com.bsuir.magistr.service.news.MagistrService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Roma on 07.05.2014.
 */
public class MagistrServiceImpl implements MagistrService{

    @Autowired
    private MagistrDAO magistrDAO;

    @Override
    public void addMagistr(Magistr magistr) {
        magistrDAO.addMagistr(magistr);
    }
}
