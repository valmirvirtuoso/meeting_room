import { Router } from "express";
import { createUser, listUser } from "../controllers/userController";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { userSchema } from "../schemas/userSchema";


const routes = Router();

export const userRoutes = () => {

    routes.post('', validationMiddleware(userSchema), createUser);
    routes.get('', listUser);
   
    return routes

}