import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/userInterfaces";
import createUserService from "../services/users/createUserService";
import listUserService from "../services/users/listUserService";

const createUser = async (req: Request, res: Response) => {

    const {name, email, password, isAdmin}: IUserRequest = req.body;

    const user = await createUserService({name, email, password, isAdmin});

    return res.status(201).json(user);

}

const listUser = async (req: Request, res: Response) => {

    const users = await listUserService();

    return res.status(200).json(users);

}

export { createUser, listUser };
