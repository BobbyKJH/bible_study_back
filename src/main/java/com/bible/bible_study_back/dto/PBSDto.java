package com.bible.bible_study_back.dto;

import java.sql.Date;

public class PBSDto {

    Integer id;
    String book;
    Integer chapter;
    Integer startVerse;
    Integer endVerse;
    String content;
    Boolean show;
    String name;
    String userId;
    Date createAt;
    Date updateAt;
    Date date;

    public PBSDto(Integer id, String book, Integer chapter, Integer startVerse, Integer endVerse, String content, Boolean show, String name, String userId, Date createAt, Date updateAt, Date date) {
        this.id = id;
        this.book = book;
        this.chapter = chapter;
        this.startVerse = startVerse;
        this.endVerse = endVerse;
        this.content = content;
        this.show = show;
        this.name = name;
        this.userId = userId;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.date = date;
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

    public Boolean getShow() {
        return show;
    }

    public void setShow(Boolean show) {
        this.show = show;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
}
