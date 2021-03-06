import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}

interface IUserRepository {
    create({ name, email, password }: ICreateUserDTO): void;
    list(): User[];
}

export { IUserRepository, ICreateUserDTO };