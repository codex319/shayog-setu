const express = require("express");

const governmentRoute = express.Router();

const governmentController = require("../controllers/government.controller.js");

// Start verification
governmentRoute.post(
  "/challenges/:id/start-verification",
  governmentController.startVerification
);

// Verify challenge
governmentRoute.post(
  "/challenges/:id/verify",
  governmentController.verifyChallenge
);

// Reject challenge
governmentRoute.post(
  "/challenges/:id/reject",
  governmentController.rejectChallenge
);

// Get Challenge

governmentRoute.get(
  "/challenges/",
  governmentController.getGovernmentChallenges
);

// get challenge By Id

governmentRoute.get(
  "/challenges/:id",
  governmentController.getGovernmentChallengeById
);

// government Dashboard 

governmentRoute.get(
  "/dashboard",
  governmentController.getGovernmentDashboardStats
);



module.exports = governmentRoute;