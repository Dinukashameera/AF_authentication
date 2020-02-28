const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 20
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024
  }
});



const User = mongoose.model("User", userSchema);

exports.User = User;