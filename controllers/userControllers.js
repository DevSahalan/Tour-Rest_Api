const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const catchAsync = require('./../utilis/catchAsync');
const User = require('./../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    users
  });
});

exports.deleteUser = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    message: "this route isn't defined yet"
  });
};
