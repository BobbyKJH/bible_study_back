package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.QTDto;
import com.bible.bible_study_back.service.QTService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class QTController {

    private QTService qtService;

    public QTController(QTService qtService) {
        this.qtService = qtService;
    }

    /** 모든 QT 데이터 api */
    @GetMapping("/qt/all")
    public List<QTDto> getAllQT(){
        return qtService.findAll();
    }

    /** QT 게시판 api */
    @GetMapping("/qt")
    public List<QTDto> getFindByPageQT(@RequestParam("page") Integer page){
        List<QTDto> qtList = qtService.findByPageQT(page, 10);
        Integer qtLength = qtService.findCountQT();

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("length", qtLength);
        map.put("qt", qtList);

        return qtList;
    }

    /** QT MyPage */
    @GetMapping("/mypage/qt")
    public List<QTDto> getMyQt(@RequestParam("userId") String userId){
        List<QTDto> MyQt = qtService.getMyQt(userId);
        Integer MyQtCount = qtService.getMyQtCount(userId);

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("myQt", MyQt);
        map.put("length",MyQtCount);

        return MyQt;
    }

    /** QT 상세 페이지 api */
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
