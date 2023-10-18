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
    public List<PBSDto> getPBSByPage(Integer page, Integer size, String book){
        return pbsMapper.findByPagePBS(size, (page - 1) * size, book);
    }

    /** PBS MyPage */
    public List<PBSDto> getMyPbs(String userId, Integer page, Integer size, String book){
        List<PBSDto> MyPbs = pbsMapper.getMyPbs(userId, size, (page - 1) * size, book);

        return MyPbs;
    }

    /** PBS MyPage Count */
    public Integer getMyPbsCount(String userId, String book){
        Integer MyPbs = pbsMapper.getMyPbsCount(userId, book);

        return MyPbs;
    }

    /** PBS 상세 페이지 */
    public PBSDto getPBSByOne(Integer id){
        return pbsMapper.findByOne(id);
    }

    /** PBS 개수 */
    public Integer getPBSCount(String book){
        return pbsMapper.findCountPBS(book);
    }
    
    /** PBS 생성 */
    public boolean createPBS(PBSDto pbs){
        Integer result = pbsMapper.createPBS(pbs);

        return result == 1;
    }

    /** PBS 수정 */
    public boolean updatePBS(PBSDto pbs){
        Integer result = pbsMapper.updatePBS(pbs);

        return result == 1;
    }

    /** PBS 삭제 */
    public boolean deletePBS(Integer id){
        Integer result = pbsMapper.deletePBS(id);

        return result == 1;
    }

    public Integer analyticsPBS() {
        return pbsMapper.analyticsPBS();
    }
}
