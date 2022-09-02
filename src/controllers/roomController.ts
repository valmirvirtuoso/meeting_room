import { Request, Response } from "express";
import createRoomService from "../services/rooms/createRoomService";
import listRoomService from "../services/rooms/listRoomService";

const createRoom = async (req: Request, res: Response) => {

    const {name} = req.body;

    const room = await createRoomService(name);

    return res.status(201).json(room);

}

const listRooms = async (req: Request, res: Response) => {

    const rooms = await listRoomService();

    return res.status(200).json(rooms);

}

export { createRoom, listRooms };
