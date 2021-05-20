const httpErrors = require("http-errors");

const createError = (err) => {
  const e = httpErrors(err[0], err[1]);
  e.code = err[2];
  return e;
};

const errors = {
  NOT_FOUND: [404, "찾을 수 없는 요청입니다."],
  FILE_NOT_FOUND: [404, "찾을 수 없는 파일입니다."],

  SERVER_ERROR: [500, "서버 에러."],
};

Object.keys(errors).forEach((key) => {
  errors[key] = createError([...errors[key], key]);
});

module.exports = errors;
