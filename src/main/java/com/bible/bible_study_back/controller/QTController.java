package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.QTDto;
import com.bible.bible_study_back.service.QTService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class QTController {

    private QTService qtService;

    public QTController(QTService qtService) {
        this.qtService = qtService;
    }

    /** 모든 QT 데이터 apt */
    @GetMapping("/qt/all")
    public List<QTDto> getAllQT(){
        return qtService.findAll();
    }

    /** QT 게시판 apt */
    @GetMapping("/qt")
    public List<QTDto> getFindByPageQT(@RequestParam("page") Integer page){
        List<QTDto> QTList = qtService.findByPageQT(page, 10);

        return QTList;
    }

    /** QT 상세페이지 apt */
    @GetMapping("/qt/{id}")
    public QTDto getFindByOneQT(@PathVariable("id") Integer id){
        QTDto QTList = qtService.findByOneQt(id);

        return QTList;
    }

    /** QT 생성 api */
    @PostMapping("/qt")
    public String getCreateQT(@RequestBody QTDto qtDto){
        QTDto qt = new QTDto(
                qtDto.getId(),
                qtDto.getBook(),
                qtDto.getChapter(),
                qtDto.getStartVerse(),
                qtDto.getEndVerse(),
                qtDto.getContent(),
                qtDto.getUserName(),
                qtDto.getUserId(),
                qtDto.getCreateAt(),
                qtDto.getUpdateAt(),
                qtDto.getDate(),
                qtDto.getShowData()
        );
        qtService.createQT(qt);

        return "QT Create Success";
    }

    /** QT 수정 api */
    @PutMapping("/qt")
    public String getUpdateQT(@RequestBody QTDto qtDto){
        QTDto qt = new QTDto(
                qtDto.getId(),
                qtDto.getBook(),
                qtDto.getChapter(),
                qtDto.getStartVerse(),
                qtDto.getEndVerse(),
                qtDto.getContent(),
                qtDto.getUserName(),
                qtDto.getUserId(),
                qtDto.getCreateAt(),
                qtDto.getUpdateAt(),
                qtDto.getDate(),
                qtDto.getShowData()
        );
        qtService.updateQT(qt);

        return "QT Update Success";
    }

    /** QT 삭제 api */
    @DeleteMapping("/qt/{id}")
    public String getDeleteQT(@PathVariable("id") Integer id){
        qtService.deleteQT(id);

        return "QT Delete Success";
    }
}
