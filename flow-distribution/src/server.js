const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');  // Import yamljs module

const swaggerDocument = YAML.load('./swagger.yml'); // Load your Swagger YAML file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const routes = require('./routes/routes');
app.use('/api', routes);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
