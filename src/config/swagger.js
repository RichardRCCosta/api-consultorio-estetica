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
  
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Insira o token JWT no formato: Bearer {token}'
      }
    }
  },
  
  security: [
    {
      bearerAuth: []
    }
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Caminho onde estão as suas rotas
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
