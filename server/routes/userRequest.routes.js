// Import controller
const RequestController = require("../controllers/userRequest.controller");

// Exports routes to be called in server.js
module.exports = (app) => {
  app.post("/api/kindwords/new", RequestController.create);
  app.get("/api/kindwords/", RequestController.getAll);
  app.get("/api/kindwords/:id", RequestController.getOne);
  app.put("/api/kindwords/:id/update", RequestController.update);
  app.delete("/api/kindwords/:id/delete", RequestController.delete);
};

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)
