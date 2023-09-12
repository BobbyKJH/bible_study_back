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
    /** PBS 상세 페이지 */
    public PBSDto getPBSByOne(Integer id){
        return pbsMapper.findByOne(id);
    }
    
    /** PBS 생성 */
    public boolean createPBS(PBSDto pbs){
        Integer result = pbsMapper.createPBS(pbs);

        return result == 1;
    }

    /** PBS 삭제 */
    public boolean deletePBS(Integer id){
        Integer result = pbsMapper.deletePBS(id);
        return result == 1;
    }
}
