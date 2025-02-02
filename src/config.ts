import { config } from "dotenv";

config();

const Config = {
  db: {
    mongo: {
      url: process.env.MONGO_URL || '',
    },
  },
  service: {
    port: 3004,
  },
  jwtSecret: process.env.JWT_SECRET || '',
  instagram: {
    access_token: process.env.INSTAGRAM_TOKEN || '',
  },
};

export default Config;
