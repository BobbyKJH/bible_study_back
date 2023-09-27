package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.AdminDto;
import com.bible.bible_study_back.service.AdminService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AdminController {

    private AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/admin")
    public AdminDto findByPBS(){
        AdminDto result = adminService.findByPBS();

        return result;
    }

    /** PBS 수정 */
    @PutMapping("/admin")
    public String editPBS(@RequestBody AdminDto admin){
        AdminDto result = new AdminDto(
                admin.getBook(),
                admin.getChapter(),
                admin.getStartVerse(),
                admin.getEndVerse(),
                admin.getStartDate(),
                admin.getEndDate(),
                admin.getEvangelize()
        );
        adminService.editPBS(result);

        return "put success";
    }
}
