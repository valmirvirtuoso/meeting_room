import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { Room } from "../../entities/roomsEntity";

const createRoomService =  async (name: string): Promise<Room> => {

    const roomsRepository = AppDataSource.getRepository(Room);

    const roomAlreadyExists = await roomsRepository.findOne({

        where: {

            name

        }

    });

    if (roomAlreadyExists) {

        throw new AppError("Room already exists");

    }

    const room = await roomsRepository.save({

        name

    });

    return room;

}

export default createRoomService;