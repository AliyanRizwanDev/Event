import express from 'express'
import {login, profileEdit, profileView, signup} from "../controller/UserController.js"

import EventRoutes from './EventRoutes.js'
import TicketRoutes from './TicketRoutes.js'
import { verifyAuth } from '../middleware/verifyAuth.js';

const OrganizerRouter = express.Router();

OrganizerRouter.post("/signup", signup);

OrganizerRouter.post("/login", login)

// OrganizerRouter.use(verifyAuth)

OrganizerRouter.get("/profile:id", profileView)

OrganizerRouter.put("/profile", profileEdit)



export default OrganizerRouter;