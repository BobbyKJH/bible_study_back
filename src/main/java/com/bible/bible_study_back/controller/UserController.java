package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.UserDto;
import com.bible.bible_study_back.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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

    /** User 찾기 Api */
    @PostMapping("/user/findUser")
    public UserDto findUser(@RequestBody UserDto userDto){
        UserDto user = userService.findUser(userDto.getUserName(), userDto.getUserBirth());
        if(user == null){
            throw new RuntimeException();
        }

        return user;
    }

    /** User 생성 api */
    @PostMapping("/user")
    public String getCreateUser(@RequestBody UserDto userDto){
        UserDto user = new UserDto(
                userDto.getUserName(),
                userDto.getUserId(),
                userDto.getUserAuth(),
                userDto.getUserBirth()
        );
        userService.createUser(user);

        return "User Create Success";
    }

    /** UserId 개수 */
    @GetMapping("/user/count")
    public Map<String, Object> getCountUser(){
        Integer UserCount = userService.getUserCount();

        Map<String, Object> userCount = new HashMap<String, Object>();

        userCount.put("userIdCount", UserCount);

        return userCount;
    }

}
