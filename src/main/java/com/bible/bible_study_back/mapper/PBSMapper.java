package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.PBSDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PBSMapper {

    List<PBSDto> findAll();
}
