import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/userEntity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/userInterfaces";

const createUserService =  async ({ name, email, password, isAdmin }: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User);

    const userAlreadyExists = await userRepository.findOne({

        where: {

            email

        }

    });

    if (userAlreadyExists) {

        throw new AppError("Email already be used");

    }

    const hashedPassword = await hash(password, 10);

    const user = userRepository.create({

        name, 
        email, 
        password: hashedPassword, 
        isAdmin

    });

    await userRepository.save(user);

    return user;

}

export default createUserService;