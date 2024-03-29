const {
  MONGO_DB_URL: URL,
  MONGO_DB_POOL_SIZE: POOL_SIZE,
} = require("../../env");
const { join } = require("path");
const createDB = require("../common/create-db");
const options = require("../common/connection-options");

const models = createDB(URL, join(__dirname, "schema"), {
  poolSize: +(POOL_SIZE || 1),
  ...options,
});

module.exports = models;
