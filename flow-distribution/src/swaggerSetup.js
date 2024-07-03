// src/swaggerSetup.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Flow Distribution API',
      version: '1.0.0',
      description: 'APIs for distributing users among astrologers',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
