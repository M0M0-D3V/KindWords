// Import controller
const RequestController = require("../controllers/request.controller");

// Exports routes to be called in server.js
module.exports = (app) => {
  app.post("/api/requests/new", RequestController.create);
  app.get("/api/requests/", RequestController.getAll);
  app.get("/api/requests/:id", RequestController.getOne);
  //   app.put("/api/requests/update/:id", RequestController.update);
  app.delete("/api/requests/delete/:id", RequestController.delete);
};

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)
