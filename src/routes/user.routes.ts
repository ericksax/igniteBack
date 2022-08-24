import { Router } from "express";
import { CreateUserService } from "../../services/CreateUser";
import { UserRepository } from "../repositories/userRepository";

export const userRoutes = Router();

const userRepository = new UserRepository();

userRoutes.get("/", (req, res) => {
  const all = userRepository.list();
  res.status(200).json(all);
});

userRoutes.post("/", (req, res) => {
  const { name, idade } = req.body;

  const createUserService = new CreateUserService(userRepository);

  createUserService.execute({ name, idade });

  return res.status(201).send();
});
