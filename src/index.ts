import express from "express";
import mongoose from "mongoose";
import { Server } from "http";
import routes from "./routes/index";
import { errorHandler } from "./middleware/errorHandler";
import { config } from "./config/environment";
import { gracefulShutdown } from "./utils/gracefulShutdown";
const app = express();
let server: Server;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(errorHandler);

async function startServer() {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log("Connected to MongoDB");

    server = app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
      console.log(`API available at http://localhost:${config.port}/api`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM", server));
process.on("SIGINT", () => gracefulShutdown("SIGINT", server));

startServer();
