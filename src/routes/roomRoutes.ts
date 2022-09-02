import { Router } from "express";
import { createRoom, listRooms } from "../controllers/roomController";



const routes = Router();

export const roomRoutes = () => {

    routes.post('', createRoom);
    routes.get('', listRooms);
   
    return routes

}