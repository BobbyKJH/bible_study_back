package com.bible.bible_study_back.controller;

import com.bible.bible_study_back.dto.PostDTO;
import com.bible.bible_study_back.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

//    @GetMapping("/post")
//    public List<PostDTO> getPost() {
//        List<PostDTO> list = postService.getAllPost();
//        return list;
//    }

    @GetMapping("/post")
    public List<PostDTO> getPostList(@RequestParam Integer page) {
        List<PostDTO> postList = postService.getPostByPage(page, 10);
        return postList;
    }

    @GetMapping("/post/{id}")
    public PostDTO getPostDetail(@PathVariable Integer id){
        PostDTO post = postService.getPostById(id);
        return post;
    }

    @PostMapping("/post")
    public String createPost(@RequestBody PostDTO postDTO){
        PostDTO post = new PostDTO(postDTO.getId(), postDTO.getTitle(), postDTO.getContent());
        postService.savePost(post);

        return "succees";
    }
}
