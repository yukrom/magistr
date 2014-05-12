package com.bsuir.magistr.dao;

import com.bsuir.magistr.domain.Magistr;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by Roma on 07.05.2014.
 */

public interface MagistrDAO {
    public void addMagistr(@Param("magistr") Magistr magistr);

    public List<Magistr> getMagistr();
}
