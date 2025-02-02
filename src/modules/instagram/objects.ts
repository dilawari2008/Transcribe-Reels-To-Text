export interface IComment {
  id: string,
  text: string,
  timestamp: Date,
  username: string,
  postId: string,
  deleted?: boolean,
}

export interface IPost {
  id: string,
  username: string;
  mediaType: string;
  mediaUrl: string;
  caption: string;
  permalink: string;
  timestamp: string;
  deleted?: boolean;
}
