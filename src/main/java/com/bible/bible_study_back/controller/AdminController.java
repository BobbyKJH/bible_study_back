package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.AdminDto;
import com.bible.bible_study_back.service.AdminService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdminController {

    private AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/admin/pbs")
    public AdminDto findByPBS(){
        AdminDto result = adminService.findByPBS();

        return result;
    }
}
