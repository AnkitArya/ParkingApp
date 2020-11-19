const express = require("express");
const router = express.Router();
const { UserService } = require("../services");

router.get("/", async (request, response) => {
  const users = await UserService.get();
  response.status(200).json(users);
});

module.exports = router;
