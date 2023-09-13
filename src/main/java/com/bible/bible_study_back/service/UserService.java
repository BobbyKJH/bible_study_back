package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.UserDto;
import com.bible.bible_study_back.mapper.UserMapper;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserMapper userMapper;

    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    /** User 생성 */
    public boolean createUser(UserDto user){
        Integer result = userMapper.createUser(user);

        return result == 1;
    }
}
