const { distributeUsersWithTopPriority } = require('../services/distributionService'); // Import the function from your service

const { Astrologer, User } = require('../models/models');

// Example data
let astrologers = [
  new Astrologer(1, 'Astrologer1', true),
  new Astrologer(2, 'Astrologer2'),
  new Astrologer(3, 'Astrologer3')
];
let users = [
  new User(1, 'User1'),
  new User(2, 'User2'),
  new User(3, 'User3'),
  new User(4, 'User4')
];

const distribute = (req, res) => {
  const { topPriorityFactor } = req.body;
  
  // Ensure distributeUsersWithTopPriority function is correctly defined and imported
  const updatedAstrologers = distributeUsersWithTopPriority(users, astrologers, topPriorityFactor);
  
  res.json(updatedAstrologers);
};

module.exports = { distribute };
