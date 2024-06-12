const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsControllers = new SessionsController();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionsControllers.create);

module.exports = sessionsRoutes;