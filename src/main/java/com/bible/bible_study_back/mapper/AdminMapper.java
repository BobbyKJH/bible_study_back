package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.AdminDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {

    AdminDto findByPBS();
}
