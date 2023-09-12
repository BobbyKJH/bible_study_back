package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.PBSDto;
import com.bible.bible_study_back.mapper.PBSMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PBSService {

    private PBSMapper pbsMapper;

    public PBSService(PBSMapper pbsMapper) {
        this.pbsMapper = pbsMapper;
    }
    
    /** 모든 PBS 정보 */
    public List<PBSDto> getAllPBS(){
        return pbsMapper.findAllPBS();
    }
    /** 10개씩 PBS 정보 (최신순) */
    public List<PBSDto> getPBSByPage(Integer page, Integer size){
        return pbsMapper.findByPagePBS(size, (page - 1) * size);
    }
    /** pbs 상세 페이지 */
    public PBSDto getPBSByOne(Integer id){
        return pbsMapper.findByOne(id);
    }
}
