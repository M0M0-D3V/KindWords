// Import model
const UserRequest = require("../models/userRequest.model");

// Export functions to be called in Routes
module.exports = {
  // CREATE: Create one Request
  create(req, res) {
    UserRequest.create(req.body)
      .then((request) => res.json(request))
      .catch((err) => res.status(400).json(err));
  },

  // READ: Get all Authors
  getAll(req, res) {
    console.log("hello i am alive, trying to getAll userRequests");
    // Blank .find param gets all
    UserRequest.find()
      .then((allRequests) => res.json({ allRequests}))
      .catch((err) => res.status(400).json(err));
  },
  // READ: Get one UserRequest by id
  getOne(req, res) {
    UserRequest.findById({ _id: req.params.id })
      .then((request) => res.json(request))
      .catch((err) => res.status(400).json(err));
  },

  // UPDATE: Update one UserRequest by id, re-running validators on any changed fields
  update(req, res) {
    UserRequest.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((updatedRequest) => res.json(updatedRequest))
      .catch((err) => res.status(400).json(err));
  },

  // DESTROY: Delete one UserRequest by id
  delete(req, res) {
    UserRequest.findByIdAndDelete(req.params.id)
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
