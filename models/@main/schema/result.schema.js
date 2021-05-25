const { Schema } = require("mongoose");
const { createSchema } = require("../../helpers");

const schema = createSchema(
  {
    email: String,
    files: [{ type: Schema.Types.ObjectId, ref: "File" }],
    complete: Boolean,
  },
  {
    createdAt: "uploadedAt",
    updatedAt: false,
  }
);

schema.statics.findById = function (id) {
  return this.findOne({ _id: id });
};

module.exports = schema;
