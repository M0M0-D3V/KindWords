// Import controller
const AirplaneController = require("../controllers/airplane.controller");

// Exports routes to be called in server.js
module.exports = (app) => {
  app.post("/api/airplanes/new", AirplaneController.create);
  app.get("/api/airplanes/", AirplaneController.getAll);
  app.get("/api/airplanes/:id", AirplaneController.getOne);
  //   app.put("/api/airplanes/update/:id", AirplaneController.update);
  app.delete("/api/airplanes/delete/:id", AirplaneController.delete);
};

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)
