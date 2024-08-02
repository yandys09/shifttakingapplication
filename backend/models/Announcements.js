const mongoose = require("mongoose");

const AnnouncementsSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    time: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcements", AnnouncementsSchema);
