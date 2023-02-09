const express = require("express");

const app = express();
app.use("/", (req, resp) => {
  resp.send({
    status: "success",
    message: "Welcome to Express JS",
  });
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));
