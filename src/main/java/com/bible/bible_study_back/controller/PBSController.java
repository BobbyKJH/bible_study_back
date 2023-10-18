package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.PBSDto;
import com.bible.bible_study_back.service.PBSService;

import org.springframework.web.bind.annotation.*;

import java.util.*;

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
    public Map<String, Object> getFindByPage(@RequestParam("page") Integer page, @RequestParam("book") String book){
        List<PBSDto> pbsNoticeList = pbsService.getPBSByPage(page, 10, book);
        Integer pbsLength = pbsService.getPBSCount(book);

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("pbs", pbsNoticeList);
        map.put("length", pbsLength);

        return map;
    }

    /** My Pbs */
    @GetMapping("/mypage/pbs")
    public Map<String, Object> getMyPbs(@RequestParam("userId") String userId, @RequestParam("page") Integer page, @RequestParam("book") String book){
        List<PBSDto> MyPbs = pbsService.getMyPbs(userId, page, 10, book);
        Integer MyPbsCount = pbsService.getMyPbsCount(userId, book);

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("pbs", MyPbs);
        map.put("length", MyPbsCount);

        return map;
    }

    /** PBS 상세 페이지 */
    @GetMapping("/pbs/{id}")
    public PBSDto getFindByOne(@PathVariable("id") Integer id){
        PBSDto pbs = pbsService.getPBSByOne(id);
        return pbs;
    }

    /** PBS 생성 */
    @PostMapping("/pbs")
    public String createPBS(@RequestBody PBSDto pbsDto){
        PBSDto pbs = new PBSDto(
                pbsDto.getId(),
                pbsDto.getBook(),
                pbsDto.getChapter(),
                pbsDto.getStartVerse(),
                pbsDto.getEndVerse(),
                pbsDto.getContent(),
                pbsDto.getUserName(),
                pbsDto.getUserId(),
                pbsDto.getCreateAt(),
                pbsDto.getShowData()
        );
        pbsService.createPBS(pbs);

        return "success";
    }

    /** PBS 수정 */
    @PutMapping("/pbs")
    public String updatePBS(@RequestBody PBSDto pbs){
        PBSDto pbsDto = new PBSDto(
                pbs.getId(),
                pbs.getBook(),
                pbs.getChapter(),
                pbs.getStartVerse(),
                pbs.getEndVerse(),
                pbs.getContent(),
                pbs.getUserName(),
                pbs.getUserId(),
                pbs.getCreateAt(),
                pbs.getShowData()
        );
        pbsService.updatePBS(pbsDto);

        return "put success";
    }

    /** PBS 삭제 */
    @DeleteMapping("/pbs/{id}")
    public String deletePBS(@PathVariable("id") Integer id){
        pbsService.deletePBS(id);

        return "delete success";
    }

    /** 모든 PBS 정보 */
    @GetMapping("/pbs/an")
    public Integer analyticsPBS() {
        Integer pbsList = pbsService.analyticsPBS();
        return pbsList;
    }
}
