import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ListUserUseCase } from "./listUserUseCase";

class ListUserController {
    constructor(private listUserUseCase: ListUserUseCase) {

    }

    handle(request: Request, response: Response): Response {
        const users = this.listUserUseCase.execute();

        return response.status(201).json(users);
    }
}

export { ListUserController }