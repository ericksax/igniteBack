import { Router } from "express";

import { User } from "./model/users";

export const route = Router();

const users: User[] = [];

route.get("/", (req, res) => {
  res.status(200).json(users);
});

route.post("/users", (req, res) => {
  const { name, idade } = req.body;

  const user = new User();

  Object.assign(user, {
    idade,
    name,
  });

  users.push(user);

  return res.send();
});
