import 'express-async-errors';
import { handleErrors } from './errors';
import express, { Application } from 'express';
import userRoutes from './routers/users.routes';
import loginRoutes from './routers/login.routes';
import clientRoutes from './routers/client.routes';
import contactRoutes from './routers/contact.routes';
import conversionRoutes from './routers/conversion.routes';

const app: Application = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/clients', clientRoutes);
app.use('/contacts', contactRoutes);
app.use('/conversions', conversionRoutes);

app.use(handleErrors);

export default app;