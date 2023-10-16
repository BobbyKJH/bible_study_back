package com.bible.bible_study_back.dto;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UserDto {


    String userName;
    String userId;
    String userAuth;
    String userBirth;

    public UserDto(String userName, String userId, String userAuth, String userBirth) {
        this.userName = userName;
        this.userId = userId;
        this.userAuth = userAuth;
        this.userBirth = userBirth;
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

    public String getUserBirth() {
        return userBirth;
    }

    public void setUserBirth(String userBirth) {
        this.userBirth = userBirth;
    }
}
