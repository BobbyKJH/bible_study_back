package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {

    /** user id 생성 */
    Integer createUser(@Param("user") UserDto user);
}
