package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.AnalyticsDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AnalyticsMapper {

    List<AnalyticsDto> analyticsPBS(@Param("startDate") String startDate, @Param("endDate") String endDate);

}
