package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.PBSDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PBSMapper {
    /** 모든 정보 */
    List<PBSDTO> findAll();

    /** 게시판 목록 */
    List<PBSDTO> findByNotice(@Param("page") Integer page, @Param("offset") Integer offset);

    /** 상세페이지 */
    PBSDTO findOne(@Param("id") Integer id);

    /** 생성 */
    Integer createPBS(@Param("pbs") PBSDTO pbs);
}
