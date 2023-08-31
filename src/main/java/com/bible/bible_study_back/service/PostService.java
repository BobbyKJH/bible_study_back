package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.PostDTO;
import com.bible.bible_study_back.mapper.PostMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private PostMapper postMapper;

    public PostService(PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    public List<PostDTO> getAllPost(){
        return postMapper.findAll();
    }

    public List<PostDTO> getPostByPage(Integer page, Integer size){
        return postMapper.findByPage(size, (page - 1) * size);
    }

    public PostDTO getPostById(Integer id){
        return postMapper.findOne(id);
    }

    public boolean savePost(PostDTO post){
        Integer result = postMapper.save(post);

        return result == 1;
    }
}
