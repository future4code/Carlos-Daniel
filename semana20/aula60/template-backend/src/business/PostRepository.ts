import { Post } from "../model/Post";

export interface PostRepository {
  getPostById(id: string): Promise<Post | undefined>;
}
