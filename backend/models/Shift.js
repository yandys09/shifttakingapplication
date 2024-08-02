const mongoose = require("mongoose");

const ShiftSchema = mongoose.Schema({
  location: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: String, required: true },
  client: { type: String, required: true },
  staffEmail: { type: String, required: true },
  amount: { type: Number, default: 0 },
  paid: { type: Number, default: 0 },
  distance: { type: Number, default: 0 },
  status: { type: String, default: "Pending" },
  notes: { type: String },
  clockin: [
    {
      time: { type: String },
      accuracy: { type: Number },
      coords: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
  ],
  clockout: [
    {
      time: { type: String },
      accuracy: { type: Number },
      coords: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
  ],
  casenotes: [
    {
      time: { type: String },
      event: { type: String },
      notes: { type: String },
    },
  ],
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Shift", ShiftSchema);
