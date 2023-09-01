package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.PBSDTO;
import com.bible.bible_study_back.mapper.PBSMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PBSService {

    private PBSMapper pbsMapper;

    public PBSService(PBSMapper pbsMapper) {
        this.pbsMapper = pbsMapper;
    }

    public List<PBSDTO> findAllPBS() {
        List<PBSDTO> list = pbsMapper.findAll();
        return list;
    }
}
