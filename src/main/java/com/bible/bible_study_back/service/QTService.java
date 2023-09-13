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

    public List<QTDto> findAll(){
        return qtMapper.findAll();
    }

    public List<QTDto> findByPageQT(Integer page, Integer size){
        return qtMapper.findByPageQT(size, (page - 1) * size);
    }
}
