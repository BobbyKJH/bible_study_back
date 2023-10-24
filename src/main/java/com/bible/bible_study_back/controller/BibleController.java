package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.service.BibleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
@CrossOrigin
public class BibleController {
    private BibleService bibleService;

    public BibleController(BibleService bibleService) {
        this.bibleService = bibleService;
    }

    @GetMapping("/bible")
    public Map<String, Object> findByBible(@RequestParam("book") String book, @RequestParam("chapter") String chapter) {
        Integer Chapter = bibleService.findByBook(book);
        Integer endVerse = bibleService.findByChapter(book, chapter);

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("chapter", Chapter);
        map.put("endVerse" , endVerse);

        return map;
    }
}
