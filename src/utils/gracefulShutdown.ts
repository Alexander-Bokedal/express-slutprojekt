import mongoose from "mongoose";
import { Server } from "http";

export async function gracefulShutdown(signal: string, server: Server) {
  console.log(`\nReceived ${signal}. Starting graceful shutdown...`);

  const shutdownTimeout = setTimeout(() => {
    console.error("Graceful shutdown timed out, forcing exit");
    process.exit(1);
  }, 10000);

  try {
    if (server) {
      console.log("Closing HTTP server...");
      await new Promise<void>((resolve, reject) => {
        server.close((err) => {
          if (err) reject(err);
          else resolve();
        });
      });
      console.log("HTTP server closed");
    }

    console.log("Closing MongoDB connection...");
    await mongoose.connection.close();
    console.log("MongoDB connection closed");

    clearTimeout(shutdownTimeout);
    console.log("Graceful shutdown completed");
    process.exit(0);
  } catch (error) {
    console.error("Error during graceful shutdown:", error);
    clearTimeout(shutdownTimeout);
    process.exit(1);
  }
}
