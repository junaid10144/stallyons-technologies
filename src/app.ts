import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/v1/taskRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './docs/swaggerOptions';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/v1', taskRoutes);

// Error handling middleware
app.use(errorMiddleware);

export default app;
