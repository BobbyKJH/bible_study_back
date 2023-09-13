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

    /** 모든 QT 데이터 */
    @GetMapping("/qt/all")
    public List<QTDto> getAllQT(){
        return qtService.findAll();
    }

    /** QT 게시판 */
    @GetMapping("/qt")
    public List<QTDto> getFindByPageQT(@RequestParam("page") Integer page){
        List<QTDto> QTList = qtService.findByPageQT(page, 10);

        return QTList;
    }

    /** QT 상세페이지 */
    @GetMapping("/qt/{id}")
    public QTDto getFindByOneQT(@PathVariable("id") Integer id){
        QTDto QTList = qtService.findByOneQt(id);

        return QTList;
    }
}
