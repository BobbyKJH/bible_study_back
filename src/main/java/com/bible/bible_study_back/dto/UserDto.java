package com.bible.bible_study_back.dto;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UserDto {


    String userName;
    String userId;
    String userAuth;

    public UserDto(String userName, String userId, String userAuth) {
        this.userName = userName;
        this.userId = userId;
        this.userAuth = userAuth;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserAuth() {
        return userAuth;
    }

    public void setUserAuth(String userAuth) {
        this.userAuth = userAuth;
    }
}
