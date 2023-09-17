package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.UserDto;
import com.bible.bible_study_back.mapper.UserMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserMapper userMapper;

    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    /** User 조회 */
    public UserDto getFindUser(String userId){
        return userMapper.getFindUser(userId);
    }

    /** User 생성 */
    public boolean createUser(UserDto user){
        Integer result = userMapper.createUser(user);

        return result == 1;
    }
}
