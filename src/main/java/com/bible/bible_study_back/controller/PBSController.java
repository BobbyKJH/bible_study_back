package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.PBSDto;
import com.bible.bible_study_back.service.PBSService;

import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PBSController {

    private PBSService pbsService;

    public PBSController(PBSService pbsService) {
        this.pbsService = pbsService;
    }

    /** 모든 PBS 정보 */
    @GetMapping("/pbs/all")
    public List<PBSDto> getAllPBS() {
        List<PBSDto> pbsList = pbsService.getAllPBS();
        return pbsList;
    }

    /** 10개씩 PBS 정보 ( 최신순 ) */
    @GetMapping("/pbs")
    public List<PBSDto> getFindByPage(@RequestParam("page") Integer page){
        List<PBSDto> PBSList = pbsService.getPBSByPage(page, 10);
        return PBSList;
    }
}
