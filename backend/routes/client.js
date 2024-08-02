const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// Add client
router.post("/", async (req, res) => {
  try {
    const newClient = Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All client
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update client
router.put("/:id", async (req, res) => {
  try {
    const updateClient = await Client.findByIdAndUpdate(
      req.body.id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json(updateClient);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Client
router.delete("/:id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.status(201).json("Client deleted successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Find client using id
router.get("/find/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
