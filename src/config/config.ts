import path from "path"

if (true || process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });
}

export const config = {
  mongoUri: process.env.MONGO_URL || 'mongodb://localhost:27017/task-manager',
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  currentUrl: process.env.CURRENT_URL || 'http://localhost'
};
