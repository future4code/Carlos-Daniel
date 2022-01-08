export enum POST_TYPES {
  NORMAL = "NORMAL",
  EVENT = "EVENT",
}

export class Post {
  constructor(
    // private userId: string,
    private id: string,
    private photo: string,
    private description: string,
    private date: Date,
    private type: POST_TYPES
  ) {}

  // getUserId() {
  //   return this.userId;
  // }

  getId() {
    return this.id;
  }

  getPhoto() {
    return this.photo;
  }

  getDescription() {
    return this.description;
  }

  getDate() {
    return this.date;
  }

  getType() {
    return this.type;
  }

  static toPostModel(data: any): Post {
    return new Post(
      // data.userId,
      data.id,
      data.photo,
      data.description,
      data.date,
      data.type
    );
  }
}
