import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    const MONGO_DB_URL = "mongodb://localhost:27017";

    const DB_NAME = "devHouse";

    mongoose.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
