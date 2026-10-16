
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  hashed_password: {
    type: String,
    required: true,
    select: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

// Virtual password field: accepts a password without storing it directly.
UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
  })
  .get(function () {
    return this._password;
  });

// Validate and hash the password before saving.
UserSchema.pre("validate", async function () {
  if (this._password === undefined) {
    return;
  }

  if (typeof this._password !== "string" || this._password.length < 6) {
    throw new Error("Password must be at least 6 characters long.");
  }

  this.hashed_password = await bcrypt.hash(this._password, 10);
  this._password = undefined;
});

// Compare a submitted password with the stored hash.
UserSchema.methods.authenticate = async function (password) {
  return bcrypt.compare(password, this.hashed_password);
};

export default mongoose.model("User", UserSchema);
