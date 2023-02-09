const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const fs = require("fs");
const path = require("path");

router.get("/", (req, resp) => {
  const { page, total } = req.query;

  resp.send({
    status: "success",
    message: "Welcome to Express JS",
    page,
    total,
  });
});

router.get("/product/:id", (req, resp) => {
  resp.json({
    id: req.params.id,
  });
});

router.post("/product/", upload.single("image"), (req, resp) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "uploads", image.originalname);
    fs.renameSync(image.path, target);
    // resp.json({
    //   name,
    //   price,
    //   stock,
    //   status,
    //   image,
    // });
    resp.sendFile(target);
  }
});

router.get("/:category/:tag", (req, resp) => {
  const { category, tag } = req.params;

  resp.send({
    category: category,
    tag: tag,
  });
});

router.get("/uploads");

// app.post("/cover", upload.single("image"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// });

module.exports = router;
