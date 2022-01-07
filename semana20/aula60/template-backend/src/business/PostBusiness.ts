import { Post } from "../model/Post";
import { PostRepository } from "./PostRepository";

export class PostBusiness {
  private postData: PostRepository;

  constructor(postRepository: PostRepository) {
    this.postData = postRepository;
  }

  getPostById = async (id: string): Promise<Post | undefined> => {
    const post = await this.postData.getPostById(id);

    return post;
  };

  //irá ter outros métodos como criar post
}
