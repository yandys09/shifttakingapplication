const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const sendMail = require("../helpers/sendEmail");

dotenv.config();

const sendResetPasswordEmail = async () => {
  ejs.renderFile(
    "templates/resetPassword.ejs",

    async (err, data) => {
      let messageoptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "You reset password link",
        html: data,
      };
      try {
        await sendMail(messageoptions);
      } catch (error) {
        console.log(err);
      }
    }
  );
};

module.exports = { sendResetPasswordEmail };
