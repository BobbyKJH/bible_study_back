package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.PBSDto;
import com.bible.bible_study_back.service.PBSService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class PBSController {

    public PBSService pbsService;

    public PBSController(PBSService pbsService) {
        this.pbsService = pbsService;
    }

    @GetMapping("/pbs/all")
    public List<PBSDto> getAllPBS() {
        List<PBSDto> pbsList = pbsService.getAllPBS();
        return pbsList;
    }
}
