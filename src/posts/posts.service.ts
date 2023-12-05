import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
/** Entity */
import { PostsModel } from "./entities/posts.entity";

export interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsModel)
    private readonly postsRepository: Repository<PostsModel>,
  ) {}

  async getAllPosts() {
    return this.postsRepository.find();
  }

  getPostById(id: number) {
    const found = this.postsRepository.findOne({ where: { id: id } });

    if (!found)
      throw new NotFoundException(
        `해당하는 ${id}값을 게시물을 찾을 수 없습니다.`,
      );

    return this.postsRepository.findOne({ where: { id: id } });
  }

  createPost(author: string, title: string, content: string) {
    const createPost = this.postsRepository.create({
      author: author,
      title: title,
      content: content,
      likeCount: 0,
      commentCount: 0,
    });

    const newPost = this.postsRepository.save(createPost);

    return newPost;
  }

  async updatePost(
    postId: number,
    author: string,
    title: string,
    content: string,
  ) {
    /** Save 기능
     * 1) 만약 데이터가 존재하지 않는다면 (id) 새로 생성
     * 2) 데이터가 존재한다면 존재하던 값을 업데이트 한다.
     */
    const post = await this.postsRepository.findOne({ where: { id: postId } });

    if (!post) {
      throw new NotFoundException(`${postId}는 없습니다.`);
    }

    if (author) {
      post.author = author;
    }
    if (title) {
      post.title = title;
    }
    if (content) {
      post.content = content;
    }

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  async deletePost(postId: number) {
    const post = await this.postsRepository.findOne({ where: { id: postId } });

    if (!post) {
      throw new NotFoundException(`${postId}는 없습니다.`);
    }

    await this.postsRepository.delete(postId);

    return postId;
  }
}
