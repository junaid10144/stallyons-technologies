import { SwaggerOptions } from "swagger-ui-express";
import { config } from "../config";
import { version } from "../../package.json"

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Task Manager API',
    version: version,
    description: 'API documentation for the Task Management application',
    contact: {
      name: 'Junaid Saleem',
      email: 'software.engineer@junaidsaleem.tech'
    }
  },
  servers: [
    {
      url: `${config.currentUrl}:${config.port}/api/v1`,
      description: 'Server'
    }
  ],
  // components: {
  //   securitySchemes: {
  //     bearerAuth: {
  //       type: 'http',
  //       scheme: 'bearer',
  //       bearerFormat: 'JWT'
  //     }
  //   }
  // },
  // security: [
  //   {
  //     bearerAuth: []
  //   }
  // ]
};

export const swaggerOptions: SwaggerOptions = {
  swaggerDefinition,
  apis: ['./src/docs/*.yml']
};
