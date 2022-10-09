const { authJwt } = require("../middleware");
const tutorials = require("../controllers/tutorial.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/tutorials/", [authJwt.verifyToken], tutorials.create);
  app.get("/api/tutorials/", [authJwt.verifyToken], tutorials.findAll);
  app.get("/api/tutorials/published", [authJwt.verifyToken], tutorials.findAllPublished);
  app.get("/api/tutorials/:id", [authJwt.verifyToken], tutorials.findOne);
  app.put("/api/tutorials/:id", [authJwt.verifyToken], tutorials.update);
  app.delete("/api/tutorials/:id", [authJwt.verifyToken], tutorials.delete);
  app.delete("/api/tutorials/", [authJwt.verifyToken], tutorials.deleteAll);

};

// module.exports = app => {
//     const tutorials = require("../controllers/tutorial.controller.js");
  
//     var router = require("express").Router();
  
//     // Create a new Tutorial
//     router.post("/", tutorials.create);
  
//     // Retrieve all Tutorials
//     router.get("/", tutorials.findAll);
  
//     // Retrieve all published Tutorials
//     router.get("/published", tutorials.findAllPublished);
  
//     // Retrieve a single Tutorial with id
//     router.get("/:id", tutorials.findOne);
  
//     // Update a Tutorial with id
//     router.put("/:id", tutorials.update);
  
//     // Delete a Tutorial with id
//     router.delete("/:id", tutorials.delete);
  
//     // Create a new Tutorial
//     router.delete("/", tutorials.deleteAll);
  
//     app.use('/api/tutorials', router);
//   };