const { Schema } = require("mongoose");
const { createSchema } = require("../../helpers");

const schema = createSchema(
  {
    url: {
      type: String,
      unique: true,
      sparse: true,
    },
    filename: String,
    extension: String,
    size: Number,
  },
  {
    createdAt: "uploadedAt",
    updatedAt: false,
  }
);

schema.index({ uploadedAt: 1 });

schema.statics.findById = function (id) {
  return this.findOne({ id });
};

module.exports = schema;
