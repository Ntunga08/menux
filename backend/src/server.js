import http from 'http';
import app from './app.js';
import { env } from './config/env.js';
import { initializeSocket } from './config/socket.js';

const server = http.createServer(app);
initializeSocket(server);

server.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
