import express from 'express';
import cors from 'cors';
import authRoutes from './modules/auth/auth.routes.js';
import restaurantRoutes from './modules/restaurant/restaurant.routes.js';
import staffRoutes from './modules/staff/staff.routes.js';
import menuRoutes from './modules/menu/menu.routes.js';
import tablesRoutes from './modules/tables/tables.routes.js';
import ordersRoutes from './modules/orders/orders.routes.js';
import requestsRoutes from './modules/requests/requests.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/tables', tablesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/requests', requestsRoutes);


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(errorHandler);

export default app;
