package com.bible.bible_study_back.dto;

import java.sql.Date;

public class AnalysisDto {

    Date date;
    Integer chart;

    public AnalysisDto(Date date, Integer chart) {
        this.date = date;
        this.chart = chart;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getChart() {
        return chart;
    }

    public void setChart(Integer chart) {
        this.chart = chart;
    }
}
