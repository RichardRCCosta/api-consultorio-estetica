// docs/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Estética',
    version: '1.0.0',
    description: 'Documentação da API do consultório de estética',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Caminho para as rotas
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
