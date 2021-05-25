const asyncHandler = require("express-async-handler");

const { createResponse } = require("../../../utils/response");
const { Result } = require("../../../models/@main");

const getResult = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  const result = await Result.findById(id);
  if (!result) return next();

  res.json(createResponse(res, result));
});

const analysis = asyncHandler(async (req, res, next) => {
  const { email, files } = req.body;
  const result = await Result.create({
    email,
    files,
    complete: false,
  });

  res.json(createResponse(res, result));
});

exports.getResult = getResult;
exports.analysis = analysis;
