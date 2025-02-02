import mongoose from "mongoose";
import Config from "./config";

const mongoConnectionUrl = Config.db.mongo.url;
const DB = mongoose.createConnection(mongoConnectionUrl);

mongoose.set("debug", false);
DB.on("connected", () => {
  console.log(`Connected to db url ${mongoConnectionUrl}`);
});
DB.on("reconnected", () => {
  console.log(`Reconnected to db url ${mongoConnectionUrl}`);
});``
DB.on("error", () => {
  console.log(`Error connecting to db url ${mongoConnectionUrl}`);
});
DB.on("disconnected", () => {
  console.log(`Disconnected connecting to db url ${mongoConnectionUrl}`);
});

export default DB;
