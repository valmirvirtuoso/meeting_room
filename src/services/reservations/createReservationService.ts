import { AppDataSource } from "../../data-source";
import { Reservation } from "../../entities/reservationEntity";
import { AppError } from "../../errors/AppError";
import { IReservationRequest } from "../../interfaces/reservationInterfaces";

const createReservationService =  async ({ name, dateMeetingStart, dateMeetingEnd, room, user }: IReservationRequest): Promise<Reservation> => {

    const reservationRepository = AppDataSource.getRepository(Reservation);

    const reservation = reservationRepository.create({

        name,
        dateMeetingStart,
        dateMeetingEnd,
        room,
        user

    });

    await reservationRepository.save(reservation);

    return reservation;

}

export default createReservationService;