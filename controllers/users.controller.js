const users = require("../public/data/users.json");
const { getRandomNumber } = require("../utils/generateRandomUserId");

module.exports.giveARandomUser = (req, res) => {
  const id = getRandomNumber(1, users.length);
  const randomUser = users.find((user) => user.id == id);
  res.status(200).json({ success: true, data: randomUser });
};

module.exports.giveAllUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
};
