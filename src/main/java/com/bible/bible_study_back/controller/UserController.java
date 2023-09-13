package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.UserDto;
import com.bible.bible_study_back.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
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
