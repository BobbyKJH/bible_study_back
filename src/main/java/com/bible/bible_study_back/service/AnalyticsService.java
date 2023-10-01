package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.AnalyticsDto;
import com.bible.bible_study_back.mapper.AnalyticsMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnalyticsService {

    AnalyticsMapper analysisMapper;

    public AnalyticsService(AnalyticsMapper analysisMapper) {
        this.analysisMapper = analysisMapper;
    }

    public List<AnalyticsDto> analysisPBS() {
        List<AnalyticsDto> result = analysisMapper.analyticsPBS();

        return result;
    }
}
