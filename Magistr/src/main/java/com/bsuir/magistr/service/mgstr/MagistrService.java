package com.bsuir.magistr.service.mgstr;

import com.bsuir.magistr.domain.Magistr;

import java.util.List;

/**
 * Created by Roma on 07.05.2014.
 */
public interface MagistrService {
    public void addMagistr(Magistr magistr);
    public List<Magistr> getMagistr();
}
