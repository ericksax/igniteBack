import express from "express";

import { userRoutes } from "./routes/user.routes";

const app = express();

const port = 3004;
app.use(express.json());
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
