import { User } from "../model/users";

//DTO - data transfer object
interface ICreateRepositoryDTO {
  name: string;
  idade: string;
}

export class UserRepository {
  private usersRepository: ICreateRepositoryDTO[];

  constructor() {
    this.usersRepository = [];
  }

  create({ idade, name }: ICreateRepositoryDTO) {
    const user = new User();

    Object.assign(user, {
      idade,
      name,
    });

    this.usersRepository.push(user);
  }
  list() {
    return this.usersRepository;
  }

  findByName(name: string) {
    const user = this.usersRepository.find((user) => name === user.name);

    return user;
  }
}
