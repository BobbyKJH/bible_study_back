package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.AdminDto;
import com.bible.bible_study_back.mapper.AdminMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    AdminMapper adminMapper;

    public AdminService(AdminMapper adminMapper) {
        this.adminMapper = adminMapper;
    }

    public AdminDto findByPBS(){
        AdminDto result = adminMapper.findByPBS();

        return result;
    }
}
