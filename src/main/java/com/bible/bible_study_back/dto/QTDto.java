package com.bible.bible_study_back.dto;

import java.util.Date;

public class QTDto {
    Integer id;
    String book;
    String chapter;
    String verse;
    String content;
    Date createAt;
    Date updateAt;
    Date date;

    public QTDto(Integer id, String book, String chapter, String verse, String content, Date createAt, Date updateAt, Date date) {
        this.id = id;
        this.book = book;
        this.chapter = chapter;
        this.verse = verse;
        this.content = content;
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

    public String getChapter() {
        return chapter;
    }

    public void setChapter(String chapter) {
        this.chapter = chapter;
    }

    public String getVerse() {
        return verse;
    }

    public void setVerse(String verse) {
        this.verse = verse;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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
