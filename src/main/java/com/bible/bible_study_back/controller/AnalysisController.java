package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.AnalysisDto;
import com.bible.bible_study_back.service.AnalysisService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class AnalysisController {

    AnalysisService analysisService;

    public AnalysisController(AnalysisService analysisService) {
        this.analysisService = analysisService;
    }

    @GetMapping("/analysis")
    public List<AnalysisDto> analysisPBS() {
        List<AnalysisDto> result = analysisService.analysisPBS();

        return result;
    }
}
