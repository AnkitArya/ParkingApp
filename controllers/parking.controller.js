const express = require("express");
const router = express.Router();
const { ParkingService } = require("../services");

router.get("/", async (request, response) => {
  const parkings = await ParkingService.get();
  response.status(200).json(parkings);
});

router.post("/", async (request, response) => {
  const body = request.body;
  const data = await ParkingService.create(body);
  response
    .status(201)
    .json({ code: "201", message: "Parking successfully Created" });
});

module.exports = router;
