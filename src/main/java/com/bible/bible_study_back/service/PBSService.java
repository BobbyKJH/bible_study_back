package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.PBSDto;
import com.bible.bible_study_back.mapper.PBSMapper;

import java.util.List;

public class PBSService {

    private PBSMapper pbsMapper;

    public PBSService(PBSMapper pbsMapper) {
        this.pbsMapper = pbsMapper;
    }

    public List<PBSDto> getAllPBS(){
        return pbsMapper.findAll();
    }
}
