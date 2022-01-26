import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUserController } from "./listUserController";
import { ListUserUseCase } from "./listUserUseCase";

const userRepository = UserRepository.getInstance();

const listUserUseCase = new ListUserUseCase(userRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController };