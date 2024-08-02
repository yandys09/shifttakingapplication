const express = require("express");
const Shift = require("../models/Shift");
const { sendShiftAssignment } = require("../EmailService/ShiftAssigment");
const { verifyToken } = require("../Middlewares/verifyToken");
const router = express.Router();

// ADD Shift
router.post("/", verifyToken, async (req, res) => {
  try {
    const newShift = Shift(req.body);
    const shift = await newShift.save();

    if (req.body.staffEmail) {
      await sendShiftAssignment(
        req.body.location,
        req.body.date,
        req.body.time,
        req.body.type,
        req.body.duration,
        req.body.client,
        req.body.staffEmail,
        req.body.notes
      );
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All Shifts
router.get("/", verifyToken, async (req, res) => {
  try {
    const shifts = await Shift.find().sort({ createdAt: -1 });
    res.status(200).json(shifts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update Shift
router.put("/:id", async (req, res) => {
  try {
    const shift = await Shift.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(shift);
  } catch (error) {
    req.status(500).json(error);
  }
});

// Get Users Shift
router.post("/me", async (req, res) => {
  try {
    const shifts = await Shift.find({
      staffEmail: req.body.email,
    }).sort({ createdAt: -1 });
    res.status(200).json(shifts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UnAssign Shifts
router.post("/unassign", async (req, res) => {
  try {
    const unassignedShift = await Shift.find({ staffEmail: "" }).sort({
      createdAt: -1,
    });
    res.status(200).json(unassignedShift);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Shift
router.get("/find/:id", async (req, res) => {
  try {
    const shift = await Shift.findById(req.params.id);
    req.status(200).json(shift);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Shift
router.delete("/:id", async (req, res) => {
  try {
    await Shift.findByIdAndDelete(req.params.id);
    res.status(201).json("Shift has been deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Assign shift
router.put("/assign/:id", async (req, res) => {
  try {
    const updatedShift = await Shift.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (req.body.staffEmail) {
      await sendShiftAssignment(
        req.body.location,
        req.body.date,
        req.body.time,
        req.body.type,
        req.body.duration,
        req.body.client,
        req.body.staffEmail,
        req.body.notes
      );
    }

    res.status(200).json(updatedShift);
  } catch (error) {
    req.status(500).json(error);
  }
});

// Add case Notes
router.put("/casenotes/:id", async (req, res) => {
  try {
    const { event, time, notes } = req.body;
    if ((event && time, notes)) {
      await Shift.findByIdAndUpdate(req.params.id, {
        $push: { casenotes: { event, time, notes } },
      });
    }

    res.status(201).json("casenote added successfully.~");
  } catch (error) {
    req.status(500).json(error);
  }
});

// ClockIn
router.put("/clockin/:id", async (req, res) => {
  try {
    const { time, coords, accuracy } = req.body;
    if (time && coords && accuracy) {
      await Shift.findByIdAndUpdate(req.params.id, {
        $push: { clockin: { time, coords, accuracy } },
      });
    }

    res.status(201).json("Clock in has been successfully.~~");
  } catch (error) {
    req.status(500).json(error);
  }
});

// ClockOut
router.put("/clockout/:id", async (req, res) => {
  try {
    const { time, coords, accuracy } = req.body;
    if (time && coords && accuracy) {
      await Shift.findByIdAndUpdate(req.params.id, {
        $push: { clockout: { time, coords, accuracy } },
      });
    }

    res.status(201).json("Clock out has been successfully.~~");
  } catch (error) {
    req.status(500).json(error);
  }
});

module.exports = router;
