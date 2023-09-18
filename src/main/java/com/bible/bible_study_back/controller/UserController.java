package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.UserDto;
import com.bible.bible_study_back.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /** User 조회 api */
    @PostMapping("/user/userId")
    public UserDto getFindUser(@RequestBody UserDto userDto){
        UserDto user = userService.getFindUser(userDto.getUserId());
        if(user == null){
            throw new RuntimeException();
        }
        return user;
    }

    /** User 생성 api */
    @PostMapping("/user")
    public String getCreateUser(@RequestBody UserDto userDto){
        UserDto user = new UserDto(
                userDto.getId(),
                userDto.getUserName(),
                userDto.getUserId()
        );
        userService.createUser(user);

        return "User Create Success";
    }
}
