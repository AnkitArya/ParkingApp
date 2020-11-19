module.exports = [
  {
    url: "/user",
    controller: require("./user.controller"),
  },
  {
    url: "/parking",
    controller: require("./parking.controller"),
  },
  {
    url: "/parked-vehicle",
    controller: require("./parkedVehicle.controller"),
  },
];
