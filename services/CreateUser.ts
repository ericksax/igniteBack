import { UserRepository } from "../src/repositories/userRepository";

interface IRequest {
  name: string;
  idade: string;
}

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  execute({ name, idade }: IRequest) {
    const userAlreadyExists = this.userRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("user already exists");
    }

    this.userRepository.create({
      name,
      idade,
    });
  }
}
