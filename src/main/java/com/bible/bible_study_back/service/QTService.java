package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.QTDto;
import com.bible.bible_study_back.mapper.QTMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QTService {
    private QTMapper qtMapper;

    public QTService(QTMapper qtMapper) {
        this.qtMapper = qtMapper;
    }

    /** 모든 QT 정보 */
    public List<QTDto> findAll(){
        return qtMapper.findAll();
    }

    /** QT 게시판 */
    public List<QTDto> findByPageQT(Integer page, Integer size){
        return qtMapper.findByPageQT(size, (page - 1) * size);
    }

    /** QT 상세페이지 */
    public QTDto findByOneQt(Integer id){
        return qtMapper.findByOneQT(id);
    }

    /** QT 생성 */
    public boolean createQT(QTDto qt){
        Integer result = qtMapper.createQT(qt);

        return result == 1;
    }
}
