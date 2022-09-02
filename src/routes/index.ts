import { Express } from "express";
import { reservationRoutes } from "./reservationRoutes";
import { roomRoutes } from "./roomRoutes";
import { userRoutes } from "./userRoutes";
    
export const appRoutes = (app: Express) => {

    app.use("/users", userRoutes());
    app.use("/rooms", roomRoutes());
    app.use("/reservations", reservationRoutes());

}