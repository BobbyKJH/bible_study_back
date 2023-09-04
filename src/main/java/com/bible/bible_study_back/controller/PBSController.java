package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.PBSDTO;
import com.bible.bible_study_back.service.PBSService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PBSController {
    private PBSService pbsService;

    public PBSController(PBSService pbsService) {
        this.pbsService = pbsService;
    }

    /** 모든 정보 */
    @GetMapping("/pbs")
    public List<PBSDTO> getPBSList() {
        List<PBSDTO> list = pbsService.findAllPBS();

        return list;
    }

    /** 게시판 */
    @GetMapping("/pbs/page")
    public List<PBSDTO> getPBSNotice(@RequestParam Integer page){
        List<PBSDTO> list = pbsService.findByNotice(page, 10);

        return list;
    }

    /** 상세 페이지 */
    @GetMapping("/pbs/{id}")
    public PBSDTO getPBSOne(@PathVariable Integer id){
        PBSDTO result = pbsService.findPBS(id);

        return result;
    }

    /** 월별 개수 */

    /** pbs 생성 */
    @PostMapping("/pbs")
    public PBSDTO createPBS(@RequestBody PBSDTO pbsDTO){
        PBSDTO createPBS = new PBSDTO(
                pbsDTO.getId(),
                pbsDTO.getBook(),
                pbsDTO.getChapter(),
                pbsDTO.getStartVerse(),
                pbsDTO.getEndVerse(),
                pbsDTO.getContent(),
                pbsDTO.getName(),
                pbsDTO.getUser(),
                pbsDTO.getCreateAt(),
                pbsDTO.getUpdateAt(),
                pbsDTO.getDate()
        );
        pbsService.createPBS(createPBS);
        System.out.println(pbsService.createPBS(createPBS));

        return createPBS;
    }

    /** 수정 */
    @PutMapping("/pbs")
    public String updatePBS(@RequestBody PBSDTO pbsDTO){
        PBSDTO updatePBS = new PBSDTO(
                pbsDTO.getId(),
                pbsDTO.getBook(),
                pbsDTO.getChapter(),
                pbsDTO.getStartVerse(),
                pbsDTO.getEndVerse(),
                pbsDTO.getContent(),
                pbsDTO.getName(),
                pbsDTO.getUser(),
                pbsDTO.getCreateAt(),
                pbsDTO.getUpdateAt(),
                pbsDTO.getDate()
        );
        pbsService.updatePBS(updatePBS);

        return "success";
    }

    /** 삭제 */
    @DeleteMapping("/pbs/{id}")
    public void deletePBS(@PathVariable Integer id){
        pbsService.deletPBS(id);
    }
}
