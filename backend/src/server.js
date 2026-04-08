import 'dotenv/config';
import app from './app.js';
import { env } from './config/env.js';
import { logger } from './config/logger.js';

app.listen(env.port, () => {
  logger.info(`Server running on http://localhost:${env.port}`);
});
