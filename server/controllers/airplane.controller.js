// Import model
const Airplane = require("../models/airplane.model");

// Export functions to be called in Routes
module.exports = {
  // CREATE: Create one Airplane
  create(req, res) {
    Airplane.create(req.body)
      .then((airplane) => res.json(airplane))
      .catch((err) => res.status(400).json(err));
  },

  // READ: Get all Authors
  getAll(req, res) {
    // Blank .find param gets all
    Airplane.find({})
      .then((airplanes) => res.json(airplanes))
      .catch((err) => res.status(400).json(err));
  },
  // READ: Get one Airplane by id
  getOne(req, res) {
    Airplane.findById({ _id: req.params.id })
      .then((airplane) => res.json(airplane))
      .catch((err) => res.status(400).json(err));
  },

  // UPDATE: Update one Airplane by id, re-running validators on any changed fields
  //   update(req, res) {
  //     Airplane.findByIdAndUpdate(req.params.id, req.body, {
  //       runValidators: true,
  //       new: true,
  //     })
  //       .then((updatedAirplane) => res.json(updatedAirplane))
  //       .catch((err) => res.status(400).json(err));
  //   },

  // DESTROY: Delete one Airplane by id
  delete(req, res) {
    Airplane.findByIdAndDelete(req.params.id)
      .then((deletedAirplane) => res.json(deletedAirplane))
      .catch((err) => res.status(400).json(err));
  },
};

// Format:
// module.exports.FUNCTION_NAME = (req, res) => {
//   MODEL.MONGOOSE_FUNCTION(PARAMS)
//     .then(VAR => res.json({MODEL: VAR}))
//     .catch(err => res.json(err))
// }
