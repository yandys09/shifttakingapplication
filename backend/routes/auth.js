const express = require("express");
const router = express.Router();
const CryptoJs = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const { sendWelcomeEmail } = require("../EmailService/Welcome");

dotenv.config();

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = User({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname,
    phone: req.body.phone,
    address: req.body.address,
    staffID: req.body.staffID,
    gender: req.body.gender,
    documents: [],
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
  });
  try {
    const user = await newUser.save();
    await sendWelcomeEmail(
      req.body.fullname,
      req.body.staffID,
      req.body.password,
      req.body.email
    );
    res.status(201).json("user save successfully");
  } catch (error) {
    res.status(500).json("something went wrong!");
  }
});

// LOGIN
router.post("/login", async(req, res) => {
  try {
     const user = await User.findOne({ staffID: req.body.staffID });
    if (!user) {
      return res.status(401).json("You have not register!");
    }
     const hashedPassword = CryptoJs.AES.decrypt(
       user.password,
       process.env.SECRET
     );
     const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
     if (originalPassword !== req.body.password) {
       return res.status(500).json("wrong credentials");
     }
    const { password, ...info } = user._doc;
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
