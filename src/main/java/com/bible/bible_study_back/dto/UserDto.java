package com.bible.bible_study_back.dto;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UserDto {


    String userName;
    String userId;

    public UserDto(String userName, String userId) {
        this.userName = userName;
        this.userId = userId;
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
}
