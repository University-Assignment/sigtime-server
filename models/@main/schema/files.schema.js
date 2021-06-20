const { createSchema } = require("../../helpers");

const schema = createSchema(
  {
    url: {
      type: String,
      unique: true,
      sparse: true,
    },
    originalname: String,
    filename: String,
    extension: String,
  },
  {
    createdAt: "uploadedAt",
    updatedAt: false,
  }
);

schema.index({ uploadedAt: 1 });

module.exports = schema;
