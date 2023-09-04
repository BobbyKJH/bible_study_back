package com.bible.bible_study_back.dto;

import java.util.Date;

public class PBSDTO {
    Integer id;
    String book;
    Integer chapter;
    Integer startVerse;
    Integer endVerse;
    String content;
    String name;
    String user;
    Date createAt;
    Date updateAt;
    String date;

    public PBSDTO(Integer id, String book, Integer chapter, Integer startVerse, Integer endVerse, String content, String name, String user, Date createAt, Date updateAt, String date) {
        this.id = id;
        this.book = book;
        this.chapter = chapter;
        this.startVerse = startVerse;
        this.endVerse = endVerse;
        this.content = content;
        this.name = name;
        this.user = user;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
