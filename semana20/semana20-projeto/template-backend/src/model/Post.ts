export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export interface Post {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  created_at: Date;
  authorId: string;
}
