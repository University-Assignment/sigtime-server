const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");

const { notFound, errorHandler } = require("./errors/handlers");
const router = require("./routes");
const { IS_DEV } = require("./env");
const app = express();

const { stream } = require("./utils/logger");

app.use(helmet());
app.use(compression());

app.use(morgan(IS_DEV ? "dev" : "combined", { stream }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(__dirname + "/uploads"));

app.use(router);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
