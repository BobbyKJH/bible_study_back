package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {

    /** User 조회 */
    UserDto getFindUser(@Param("userId") String userId);

    /** User 생성 */
    Integer createUser(@Param("user") UserDto user);

    Integer getUserCount();
}
