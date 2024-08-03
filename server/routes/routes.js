const express = require("express");
const {
  uploadImage,
  downloadImage,
} = require("../controller/image-controller");
const router = express.Router();
const upload = require("../utils/upload");

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);
router.get("/health", (req, res) => {
  res.status(200).send("Server is running");
});
module.exports = router;
