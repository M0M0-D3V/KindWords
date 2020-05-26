// Import model
const Request = require("../models/request.model");

// Export functions to be called in Routes
module.exports = {
  // CREATE: Create one Request
  create(req, res) {
    Request.create(req.body)
      .then((request) => res.json(request))
      .catch((err) => res.status(400).json(err));
  },

  // READ: Get all Authors
  getAll(req, res) {
    // Blank .find param gets all
    Request.find({})
      .then((requests) => res.json(requests))
      .catch((err) => res.status(400).json(err));
  },
  // READ: Get one Request by id
  getOne(req, res) {
    Request.findById({ _id: req.params.id })
      .then((request) => res.json(request))
      .catch((err) => res.status(400).json(err));
  },

  // UPDATE: Update one Request by id, re-running validators on any changed fields
  //   update(req, res) {
  //     Request.findByIdAndUpdate(req.params.id, req.body, {
  //       runValidators: true,
  //       new: true,
  //     })
  //       .then((updatedPlayer) => res.json(updatedPlayer))
  //       .catch((err) => res.status(400).json(err));
  //   },

  // DESTROY: Delete one Request by id
  delete(req, res) {
    Request.findByIdAndDelete(req.params.id)
      .then((deletedRequest) => res.json(deletedRequest))
      .catch((err) => res.status(400).json(err));
  },
};

// Format:
// module.exports.FUNCTION_NAME = (req, res) => {
//   MODEL.MONGOOSE_FUNCTION(PARAMS)
//     .then(VAR => res.json({MODEL: VAR}))
//     .catch(err => res.json(err))
// }
