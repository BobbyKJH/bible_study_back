package com.bible.bible_study_back.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BibleMapper {
    Integer findByBook(@Param("book") String book);

    Integer findByChapter(@Param("book") String book, @Param("chapter") String chapter);
}
