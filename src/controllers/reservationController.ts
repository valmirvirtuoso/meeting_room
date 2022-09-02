import { Request, Response } from "express";
import createReservationService from "../services/reservations/createReservationService";
import listReservationService from "../services/reservations/listReservationsService";


const createReservation = async (req: Request, res: Response) => {

    const { name, dateMeetingStart, dateMeetingEnd, room, user } = req.body;

    const reservation = await createReservationService({ name, dateMeetingStart, dateMeetingEnd, room, user });

    console.log(reservation)
    return res.status(201).json(reservation);


}

const listReservations = async (req: Request, res: Response) => {

    const reservations = await listReservationService();
    return res.json(reservations);


}

export { createReservation, listReservations }