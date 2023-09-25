package com.bible.bible_study_back.dto;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class AdminDto {

    String chapter;
    Integer startVerse;
    Integer endVerse;

    public AdminDto(String chapter, Integer startVerse, Integer endVerse) {
        this.chapter = chapter;
        this.startVerse = startVerse;
        this.endVerse = endVerse;
    }

    public String getChapter() {
        return chapter;
    }

    public void setChapter(String chapter) {
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
}
