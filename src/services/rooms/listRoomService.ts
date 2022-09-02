import { AppDataSource } from "../../data-source"
import { Room } from "../../entities/roomsEntity";

const listRoomService = async (): Promise<Room[]> => {

    const roomsRepository = AppDataSource.getRepository(Room);

    const rooms = await roomsRepository.find();

    return rooms;

}

export default listRoomService;