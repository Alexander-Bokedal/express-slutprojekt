export const config = {
  mongoUrl: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/animes",
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
};
