import dotenv from 'dotenv';
import { APP_NAME, formatMessage } from '@messaging-app/shared';

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000;

console.log(`[Server] Starting ${APP_NAME} on port ${port}...`);
console.log(formatMessage('System', 'Server initialized successfully!'));
