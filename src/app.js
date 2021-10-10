const express = require('express');
const routes = require('./server');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(express.json());
  }
}

module.exports = new App().server;