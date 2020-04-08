import express, { Application } from "express";
import morgan from "morgan";
import dotenv from 'dotenv'

// Routes
import IndexRoutes from "./routes/index.routes";
import PostRoutes from "./routes/post.routes";

export class App {
  app: Application;

  constructor() {
    this.app = express();

    dotenv.config();

    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set("port", process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(IndexRoutes);
    this.app.use("/posts", PostRoutes);
  }

  async listen(): Promise<void> {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}
