package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.PBSDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PBSMapper {
    List<PBSDTO> findAll();
}
