package com.bible.bible_study_back.service;

import com.bible.bible_study_back.mapper.BibleMapper;
import org.springframework.stereotype.Service;

@Service
public class BibleService {
    private BibleMapper bibleMapper;

    public BibleService(BibleMapper bibleMapper) {
        this.bibleMapper = bibleMapper;
    }

    public Integer findByBook(String book){
        return bibleMapper.findByBook(book);
    }

    public Integer findByChapter(String book, String chapter){
        return bibleMapper.findByChapter(book, chapter);
    }
}
