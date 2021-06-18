const asyncHandler = require("express-async-handler");
const axios = require("axios");

const { createResponse } = require("../../../utils/response");
const { Results } = require("../../../models/@main");

const getResult = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  const result = await Results.findById(id);
  if (!result) return next();

  res.json(createResponse(res, result));
});

const analysis = asyncHandler(async (req, res, next) => {
  const { email, files } = req.body;
  const result = await Results.create({
    email,
    files,
    complete: false,
  });

  axios
    .post("http://127.0.0.1:5001/v1/analysis", {
      id: result._id,
    })
    .then((res) => {
      console.log("ok");
    });
  res.json(createResponse(res, result));
});

exports.getResult = getResult;
exports.analysis = analysis;
