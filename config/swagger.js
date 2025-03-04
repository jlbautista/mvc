const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuración de Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MVC Project Template - using NodeJS, Express, Sequelize and MySQL',
            version: '1.0.0',
            description: 'Documentación de mi API usando Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3001/api/',
                description: 'Servidor local',
            },
        ],
    },
    apis: ['./routes/*.js'], // Rutas donde están las anotaciones de Swagger
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`📄 Documentación disponible en: http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
