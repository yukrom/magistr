package com.bsuir.magistr.service.mgstr.impl;

import com.bsuir.magistr.dao.MagistrDAO;
import com.bsuir.magistr.domain.Magistr;
import com.bsuir.magistr.service.mgstr.MagistrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Roma on 07.05.2014.
 */

@Service
public class MagistrServiceImpl implements MagistrService{

    @Autowired
    private MagistrDAO magistrDAO;

    @Override
    public void addMagistr(Magistr magistr) {
        magistrDAO.addMagistr(magistr);
    }

    @Override
    public List<Magistr> getMagistr() {
        return magistrDAO.getMagistr();
    }


}
