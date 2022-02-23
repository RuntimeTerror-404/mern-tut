const asyncHandler = require("express-async-handler");

const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "goal has been set" });
});

const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "goal has been set up" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal:${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal:${req.params.id}` });
});

// const myBio = (req, res) => {
//   res.status(200).json({
//     name: "Mohit Parashar",
//     age: 19,
//     Place: "Bangalore",
//   });
// };

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
