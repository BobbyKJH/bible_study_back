package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.PBSDTO;
import com.bible.bible_study_back.mapper.PBSMapper;
import org.apache.ibatis.annotations.Param;
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

    public List<PBSDTO> findByNotice(Integer page, Integer size){
        List<PBSDTO> list = pbsMapper.findByNotice(size, (page - 1) * size);
        return list;
    }

    public PBSDTO findOne(Integer id){
        PBSDTO result = pbsMapper.findOne(id);
        return  result;
    }

    public boolean createPBS(PBSDTO pbs){
        Integer result = pbsMapper.createPBS(pbs);

        return result == 1;
    }
}
