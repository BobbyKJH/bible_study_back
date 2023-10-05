package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.AnalyticsDto;
import com.bible.bible_study_back.service.AnalyticsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AnalyticsController {

    AnalyticsService analyticsService;

    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/analytics/pbs")
    public List<AnalyticsDto> analysisPBS(@RequestParam("startDate") String startDate, @RequestParam("endDate") String endDate) {
        List<AnalyticsDto> result = analyticsService.analysisPBS(startDate, endDate);

        return result;
    }

    @GetMapping("/analytics/qt")
    public List<AnalyticsDto> analysisQT(@RequestParam("startDate") String startDate, @RequestParam("endDate") String endDate) {
        List<AnalyticsDto> result = analyticsService.analysisQT(startDate, endDate);

        return result;
    }
}
