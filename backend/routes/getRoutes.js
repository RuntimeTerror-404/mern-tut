const express = require("express");

const router = express.Router();

const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoal).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

// router.get("/", getGoal);
// router.get("/", myBio);

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Get goals!" });
// });

// router.post("/", setGoal);
// router.post("/", (req, res) => {
//   res.status(200).json({ message: "post goals" });
// });

// router.put("/:id", updateGoal);
// router.put("/:id", (req, res) => {
//   res.status(200).json({ message: `update goal:${req.params.id}` });
// });

// router.delete("/:id", deleteGoal);
// router.delete("/:id", (req, res) => {
//   res.status(200).json({ message: `delete goal:${req.params.id}` });
// });

module.exports = router;
