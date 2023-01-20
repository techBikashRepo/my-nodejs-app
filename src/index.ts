import * as express from "express";
import { Server } from "./server";

let server = new Server().app;

let port = 5000;

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
