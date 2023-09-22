package com.bible.bible_study_back.dto;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UserDto {

    Integer id;
    String userName;
    String userId;

    public UserDto(Integer id, String userName, String userId) {
        this.id = id;
        this.userName = userName;
        this.userId = userId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
