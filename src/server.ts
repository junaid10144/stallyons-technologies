import mongoose from 'mongoose';
import app from './app';
import { config } from './config/config';

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch((error) => console.error('MongoDB connection error:', error));
