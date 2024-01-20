const { default: mongoose } = require("mongoose");

const bountySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  issueLink: {
    type: String,
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "open",
  },
  createdBy: {
    type: String,
    required: true,
  },
  Applications: {
    type: Array,
    required: false,
  },
});

const bounty = mongoose.model("bounty", bountySchema);

module.exports = bounty;
