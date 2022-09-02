import { AppDataSource } from "../../data-source"
import { Reservation } from "../../entities/reservationEntity";

const listReservationService = async (): Promise<Reservation[]> => {

    const reservationRepository = AppDataSource.getRepository(Reservation);

    const reservations = await reservationRepository.find();

    return reservations;

}

export default listReservationService;