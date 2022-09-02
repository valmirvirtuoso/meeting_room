import { Router } from "express";
import { createReservation, listReservations } from "../controllers/reservationController";


const routes = Router();

export const reservationRoutes = () => {

    routes.post('', createReservation);
    routes.get('', listReservations);
   
    return routes

}