const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController"); // imports functions from controllers

const { protect } = require("../middleware/authMiddleware");

// Used .route() because the route paths were the same
// handles GET/POST to '/' route of /api/goals
router.route("/").get(protect, getGoals).post(protect, setGoal);

// handles PUT/DELETE to '/:id' route of /api/goals/:id
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
