const { Schema } = require("mongoose");
const { createSchema } = require("../../helpers");

const schema = createSchema(
  {
    email: String,
    files: [{ type: Schema.Types.ObjectId, ref: "File" }],
    complete: Boolean,
    signature: Number,
  },
  {
    createdAt: "uploadedAt",
    updatedAt: false,
  }
);

module.exports = schema;
