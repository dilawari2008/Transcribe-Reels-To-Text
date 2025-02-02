import { Schema } from "mongoose";
import DB from "../../db";
import { IClient } from "./objects";

const clientSchema: Schema = new Schema<IClient>({
  id: String,
  name: String,
  username: String,
  biography: String,
  profilePictureUrl: String,
  deleted: { type: Boolean, required: true , default: false },
});


export const Client = DB.model<IClient>('Client', clientSchema);

