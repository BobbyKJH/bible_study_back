package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.PBSDTO;
import com.bible.bible_study_back.service.PBSService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PBSController {
    private PBSService pbsService;

    public PBSController(PBSService pbsService) {
        this.pbsService = pbsService;
    }

    @GetMapping("/pbs")
    public List<PBSDTO> getPBSList() {
        List<PBSDTO> list = pbsService.findAllPBS();
        return list;
    }

}
