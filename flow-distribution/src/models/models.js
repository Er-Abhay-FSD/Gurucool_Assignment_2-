// src/models/models.js

class Astrologer {
    constructor(id, name, isTop = false, connections = 0) {
      this.id = id;
      this.name = name;
      this.isTop = isTop; // Indicates if the astrologer is a top astrologer
      this.connections = connections; // Number of current connections
    }
  }
  
  class User {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  module.exports = { Astrologer, User };
  