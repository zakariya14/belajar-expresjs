const express = require("express");
const path = require("path");
const router = require("./routes");
const app = express();
const log = require("./middlewares/logger");

app.use(log);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(router);
app.use((req, resp, next) => {
  resp.status(404);
  resp.send({
    statusbar: "failed",
    message: "Resource " + req.originalUrl + " Not Found",
  });
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));
