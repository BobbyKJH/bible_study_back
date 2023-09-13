package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.QTDto;
import com.bible.bible_study_back.service.QTService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class QTController {

    private QTService qtService;

    public QTController(QTService qtService) {
        this.qtService = qtService;
    }

    @GetMapping("/qt/all")
    public List<QTDto> getAllQT(){
        return qtService.findAll();
    }
}
