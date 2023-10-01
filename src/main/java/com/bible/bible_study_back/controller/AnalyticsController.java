package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.AnalyticsDto;
import com.bible.bible_study_back.service.AnalyticsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class AnalyticsController {

    AnalyticsService analyticsService;

    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/analysis")
    public List<AnalyticsDto> analysisPBS() {
        List<AnalyticsDto> result = analyticsService.analysisPBS();

        return result;
    }
}
