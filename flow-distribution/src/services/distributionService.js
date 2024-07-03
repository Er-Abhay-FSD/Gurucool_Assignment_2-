const { Astrologer, User } = require('../models/models');

const distributeUsersFairly = (users, astrologers) => {
  // Reset connections for all astrologers
  astrologers.forEach(astrologer => {
    astrologer.connections = 0;
  });

  let userIndex = 0;
  while (userIndex < users.length) {
    for (let i = 0; i < astrologers.length && userIndex < users.length; i++) {
      astrologers[i].connections++;
      userIndex++;
    }
  }
  return astrologers;
};

const distributeUsersWithTopPriority = (users, astrologers, topPriorityFactor = 2) => {
  // Reset connections for all astrologers
  astrologers.forEach(astrologer => {
    astrologer.connections = 0;
  });

  let userIndex = 0;
  while (userIndex < users.length) {
    for (let i = 0; i < astrologers.length && userIndex < users.length; i++) {
      let allocationCount = astrologers[i].isTop ? topPriorityFactor : 1;
      for (let j = 0; j < allocationCount && userIndex < users.length; j++) {
        astrologers[i].connections++;
        userIndex++;
      }
    }
  }
  return astrologers;
};

module.exports = { distributeUsersFairly, distributeUsersWithTopPriority };
