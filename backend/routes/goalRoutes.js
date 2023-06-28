const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController"); // imports functions from controllers

// Used .route() because the route paths were the same
// handles GET/POST to '/' route of /api/goals
router.route("/").get(getGoals).post(setGoal);

// handles PUT/DELETE to '/:id' route of /api/goals/:id
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
