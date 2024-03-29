/**
 * @name Nebula
 * @version 0.0.1a
 * @copyright Damascus Engineering. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus Engineering intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Exports routing
 */

import { Router } from 'express';
import UserRoutes from './user.routes';
import FoodRoutes from './food.routes';
import { API_URI } from '../common/config/app.config';

const routes = Router();

routes.use(API_URI, UserRoutes);
routes.use(API_URI, FoodRoutes);

export default routes;