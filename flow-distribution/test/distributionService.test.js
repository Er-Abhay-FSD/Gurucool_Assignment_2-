const { expect } = require('chai');
const { describe, it } = require('mocha'); // Import describe and it from Mocha
const { distributeUsersFairly, distributeUsersWithTopPriority } = require('../src/services/distributionService');
const { Astrologer, User } = require('../src/models/models');

describe('Distribution Service', () => {
  it('should fairly distribute users among astrologers', () => {
    const users = [new User(1, 'User1'), new User(2, 'User2'), new User(3, 'User3')];
    const astrologers = [new Astrologer(1, 'Astrologer1'), new Astrologer(2, 'Astrologer2')];
    const result = distributeUsersFairly(users, astrologers);
    expect(result[0].connections).to.equal(2);
    expect(result[1].connections).to.equal(1);
    console.log('✅ Fair distribution test passed!');
  });

  it('should prioritize top astrologers in distribution', () => {
    const users = [new User(1, 'User1'), new User(2, 'User2'), new User(3, 'User3')];
    const astrologers = [new Astrologer(1, 'Astrologer1', true), new Astrologer(2, 'Astrologer2')];
    const result = distributeUsersWithTopPriority(users, astrologers, 2);
    expect(result[0].connections).to.equal(2);
    expect(result[1].connections).to.equal(1);
    console.log('✅ Top priority distribution test passed!');
  });
});
