const express = require('express');
const router = express.Router();
const { distribute } = require('../controllers/distributionController');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Flow Distribution API',
      version: '1.0.0',
      description: 'APIs for distributing users among astrologers',
    },
  },
  apis: ['./src/routes/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));

// Example route definition
/**
 * @swagger
 * /api/distribute:
 *   post:
 *     summary: Distribute users among astrologers
 *     description: Distributes users among astrologers based on a specified factor.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topPriorityFactor:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Successful distribution
 *       '400':
 *         description: Invalid request body
 */
router.post('/distribute', distribute);

module.exports = router;
