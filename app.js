const express = require("express");
const bodyParser = require("body-parser");
const controllers = require("./controllers");
const PORT = 8080;
const BaseAPIUrl = "/api/v1";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

for (const controller of controllers) {
  app.use(BaseAPIUrl + controller.url, controller.controller);
}

function init() {
  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}.`);
  });
}

init();
