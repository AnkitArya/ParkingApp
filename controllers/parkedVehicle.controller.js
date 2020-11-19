const express = require("express");
const router = express.Router();
const { ParkedVehicleService } = require("../services");

router.get("/", async (request, response) => {
  const parkings = await ParkedVehicleService.get();
  response.status(200).json(parkings);
});

router.post("/", async (request, response) => {
  const body = request.body;
  const data = await ParkedVehicleService.create(body);
  response
    .status(201)
    .json({ code: "201", message: "Parking slot booked successfully" });
});

module.exports = router;
