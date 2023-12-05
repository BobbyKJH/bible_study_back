import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
/** Service */
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /** Get /posts 모든 정보 가져온다 */
  @Get()
  getPosts() {
    return this.postsService.getAllPosts();
  }

  /** Get /posts/:id 상세 정보 */
  @Get(":id")
  getPost(@Param("id") id: string) {
    return this.postsService.getPostById(+id);
  }

  /** Post /posts 생성 */
  @Post()
  createPost(
    @Body("author") author: string,
    @Body("title") title: string,
    @Body("content") content: string,
  ) {
    return this.postsService.createPost(author, title, content);
  }

  /** Put /posts/:id 수정 */
  @Put(":id")
  updatePost(
    @Param("id") id: string,
    @Body("author") author?: string,
    @Body("title") title?: string,
    @Body("content") content?: string,
  ) {
    return this.postsService.updatePost(+id, author, title, content);
  }

  /** Delete /posts/:id 삭제 */
  @Delete(":id")
  deletePost(@Param("id") id: string) {
    return this.postsService.deletePost(+id);
  }
}
