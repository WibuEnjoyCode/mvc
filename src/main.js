import express from "express";
import * as path from "path";
import { routerUser } from "./routes/User.js";

//! Express settings
const app = express();
const PORT = process.env.PORT || 3000;

//! App settings
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

//! Url settings
app.use("/", routerUser);

app.listen(PORT, () => {
  console.log("Server berjalan di http://localhost:3000");
});
