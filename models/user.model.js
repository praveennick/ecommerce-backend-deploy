var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
    
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: "ROLE_CUSTOMER",
  },
});

module.exports = mongoose.model("user", UserSchema);
