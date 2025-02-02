import mongoose, { Schema } from "mongoose";
import { IComment, IPost } from "./objects";
import DB from "../../db";

const commentSchema: Schema = new Schema<IComment>({
  id: String,
  text: String,
  timestamp: Date,
  username: String,
  postId: String,
  deleted: { type: Boolean, required: true, default: false },
});

const postSchema: Schema = new Schema<IPost>({
  id: String,
  username: String,
  mediaType: String,
  mediaUrl: String,
  caption: String,
  permalink: String,
  timestamp: String,
  deleted: { type: Boolean, required: true, default: false },
});

export const Post = mongoose.model<IPost>("Post", postSchema);
export const Comment = DB.model<IComment>("Comment", commentSchema);
