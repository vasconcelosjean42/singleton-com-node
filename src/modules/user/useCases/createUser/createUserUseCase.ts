import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) { }
    execute({ name, email, password }: IRequest): void {
        this.userRepository.create({ name, email, password });
    }
}

export { CreateUserUseCase }