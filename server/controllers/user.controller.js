
import User from "../user.js";
import mongoose from "mongoose";

// GET: Get all users without exposing password hashes.
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-hashed_password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Get one user by ID.
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST: Register a new user.
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required.",
      });
    }

    const user = new User({ name, email });
    user.password = password;

    await user.save();

    return res.status(201).json({
      message: "User created successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    const status = error.code === 11000 ? 409 : 400;

    return res.status(status).json({
      message: error.message,
    });
  }
};

// PUT: Update a user by ID.
export const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        updated: new Date(),
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      updated: user.updated,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// DELETE: Remove one user by ID.
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// DELETE: Remove all users.
export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});

    return res.json({ message: "All users deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Load a user profile by ID for protected routes.
export const userByID = async (req, res, next, id) => {
  try {
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    req.profile = user;
    return next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
