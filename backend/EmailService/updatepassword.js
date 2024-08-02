const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const sendMail = require("../helpers/sendEmail");
const User = require("../models/User");

dotenv.config();

const sendUpdatePasswordEmail = (email, password) => {
  ejs.renderFile(
    "templates/updatePassword.ejs",
    {
      password,
    },
    async (err, data) => {
      let messageoptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "You've changed your password",
        html: data,
      };
      try {
        await sendMail(messageoptions);
      } catch (error) {
        console.log(error);
      }
    }
  );
};

module.exports = { sendUpdatePasswordEmail };
