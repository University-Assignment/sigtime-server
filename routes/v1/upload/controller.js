const asyncHandler = require("express-async-handler");
const { extname } = require("path");
const { createResponse } = require("../../../utils/response");
const { Files } = require("../../../models/@main");

const upload = asyncHandler(async (req, res, next) => {
  const { path, originalName, filename } = req.file;

  const file = await Files.create({
    url: path,
    filename: originalName,
    extension: extname(filename),
  });
  if (!file) return next();

  res.json(createResponse(res, file));
});

exports.upload = upload;
