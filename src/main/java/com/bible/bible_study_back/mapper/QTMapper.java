package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.QTDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface QTMapper {

    /** QT 모든 데이터 */
    List<QTDto> findAll();

    /** QT 게시판 */
    List<QTDto> findByPageQT(@Param("count") Integer count, @Param("offset") Integer offset);
    
    /** QT 상세페이지 */
    QTDto findByOneQT(@Param("id") Integer id);

}
