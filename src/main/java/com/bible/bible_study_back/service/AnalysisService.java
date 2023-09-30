package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.AnalysisDto;
import com.bible.bible_study_back.mapper.AnalysisMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnalysisService {

    AnalysisMapper analysisMapper;

    public AnalysisService(AnalysisMapper analysisMapper) {
        this.analysisMapper = analysisMapper;
    }

    public List<AnalysisDto> analysisPBS() {
        List<AnalysisDto> result = analysisMapper.analysisPBS();

        return result;
    }
}
