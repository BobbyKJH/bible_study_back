package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.PostDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PostMapper {
    /** 모든데이터 */
    List<PostDTO> findAll();

    /** 게시판 기능 */
    List<PostDTO> findByPage(@Param("count") Integer count, @Param("offset") Integer offset);

    /** 글 상세 보기 */
    PostDTO findOne(@Param("id") Integer id);

    /** 글 등록 */
    Integer save(@Param("post") PostDTO post);
}
