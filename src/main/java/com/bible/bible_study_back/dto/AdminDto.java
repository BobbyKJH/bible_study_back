package com.bible.bible_study_back.dto;

import lombok.NoArgsConstructor;

import java.sql.Date;

@NoArgsConstructor
public class AdminDto {

    String book;
    Integer chapter;
    Integer startVerse;
    Integer endVerse;
    Date startDate;
    Date endDate;
    String evangelize;

    public AdminDto(String book, Integer chapter, Integer startVerse, Integer endVerse, Date startDate, Date endDate, String evangelize) {
        this.book = book;
        this.chapter = chapter;
        this.startVerse = startVerse;
        this.endVerse = endVerse;
        this.startDate = startDate;
        this.endDate = endDate;
        this.evangelize = evangelize;
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getEvangelize() {
        return evangelize;
    }

    public void setEvangelize(String evangelize) {
        this.evangelize = evangelize;
    }
}
