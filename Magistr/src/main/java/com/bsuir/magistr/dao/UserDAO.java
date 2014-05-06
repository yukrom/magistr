package com.bsuir.magistr.dao;

import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * User: RomanYukhnevich
 * Date: 10/30/13
 * Time: 5:31 PM
 */
public interface UserDAO {

    public List<String> findAllUsers(@Param("limit")Integer limit,@Param("start") Integer start);

    public Integer getQuantity();

}
