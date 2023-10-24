package com.bible.bible_study_back.dto;

public class BibleDto {
    String book;
    Integer chapter;
    Integer endVerse;

    public BibleDto(String book, Integer chapter, Integer endVerse) {
        this.book = book;
        this.chapter = chapter;
        this.endVerse = endVerse;
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

    public Integer getEndVerse() {
        return endVerse;
    }

    public void setEndVerse(Integer endVerse) {
        this.endVerse = endVerse;
    }
}
