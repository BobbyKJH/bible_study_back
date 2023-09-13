package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.QTDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface QTMapper {

    /** QT 모든 데이터 */
    List<QTDto> findAll();


}
