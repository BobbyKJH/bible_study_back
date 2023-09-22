package com.bible.bible_study_back.dto;

import lombok.NoArgsConstructor;

import java.sql.Date;

@NoArgsConstructor
public class PBSDto {

    Integer id;
    String book;
    Integer chapter;
    Integer startVerse;
    Integer endVerse;
    String content;
    String userName;
    String userId;
    Date createAt;
    Date updateAt;
    Date date;
    String showData;

    public PBSDto(Integer id, String book, Integer chapter, Integer startVerse, Integer endVerse, String content, String userName, String userId, Date createAt, Date updateAt, Date date, String showData) {
        this.id = id;
        this.book = book;
        this.chapter = chapter;
        this.startVerse = startVerse;
        this.endVerse = endVerse;
        this.content = content;
        this.userName = userName;
        this.userId = userId;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.date = date;
        this.showData = showData;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBook() {
        return book;
    }

    public void setBook(String book) {
        this.book = book;
    }

    public Integer getChapter() {
        return chapter;
    }

    public void setChapter(Integer chapter) {
        this.chapter = chapter;
    }

    public Integer getStartVerse() {
        return startVerse;
    }

    public void setStartVerse(Integer startVerse) {
        this.startVerse = startVerse;
    }

    public Integer getEndVerse() {
        return endVerse;
    }

    public void setEndVerse(Integer endVerse) {
        this.endVerse = endVerse;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getShowData() {
        return showData;
    }

    public void setShowData(String showData) {
        this.showData = showData;
    }
}
