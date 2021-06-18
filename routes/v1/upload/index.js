const { Router } = require("express");
const controller = require("./controller");
const { createUpload } = require("../../../utils/file");

const router = Router();
const upload = createUpload();

router.post("/", upload.single("file"), controller.upload);

module.exports = router;
