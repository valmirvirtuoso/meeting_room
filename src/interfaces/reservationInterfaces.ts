import { Room } from "../entities/roomsEntity";
import { User } from "../entities/userEntity";

export interface IReservationRequest {

    name: string;
    dateMeetingStart: Date;
    dateMeetingEnd: Date;
    room: Room;
    user: User;

}