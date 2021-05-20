const multer = require("multer");
const { existsSync } = require("fs");
const { sync } = require("mkdirp");
const { v4 } = require("uuid");
const { extname } = require("path");

const { UPLOAD_DIR } = require("../env");

const createUpload = () => {
  if (!existsSync(UPLOAD_DIR)) sync(UPLOAD_DIR);

  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, UPLOAD_DIR);
    },
    filename(req, file, cb) {
      cb(null, `${v4()}${extname(file.originalname)}`);
    },
  });

  return multer({ storage });
};

exports.createUpload = createUpload;
