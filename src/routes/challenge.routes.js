const express=require("express");
const challengeRoute=express.Router();
const challengeController=require('../controllers/challenge.controller.js');
const upload = require("../middleware/upload.js");

/**
 * @route POST/api/challenges
 * @description user submit the problem
 * @access public 
 */

challengeRoute.post("/challenges",
     upload.single("image"),
    challengeController.userChallenge);

/**
 * @route GET/api/challenges
 * @description user get all  the problem
 * @access public 
 */


challengeRoute.get("/challenges",challengeController.getAllChallenges)

/**
 * @route GET/api/challenges/:id
 * @description user Get by id 
 * @access public 
 **/
challengeRoute.get("/challenges/:id",challengeController.getOneChallenges);




module.exports = challengeRoute;