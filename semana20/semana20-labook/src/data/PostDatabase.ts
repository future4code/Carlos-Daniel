import { BaseDatabase } from "../data/BaseDatabase";
import { Post } from "../model/Post";
import { User } from "../model/User";

export class PostDatabase extends BaseDatabase {
  async createPost(post: Post) {
    try {
      await this.connection("labook_posts").insert(post);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async findPostById(id: string): Promise<Post> {
    try {
      const postId = await this.connection("labook_posts")
        .select("*")
        .where({ id });
      return postId[0] && Post.toPostModel(postId[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
