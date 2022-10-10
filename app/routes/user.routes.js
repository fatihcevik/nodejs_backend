const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/users/", [authJwt.verifyToken], controller.create);
  app.get("/api/users/", [authJwt.verifyToken], controller.findAll);
  app.get("/api/users/:id", [authJwt.verifyToken], controller.findOne);
  app.put("/api/users/:id", [authJwt.verifyToken], controller.update);
  app.delete("/api/users/:id", [authJwt.verifyToken], controller.delete);
};