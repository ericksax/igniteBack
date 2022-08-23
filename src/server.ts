import express from "express";

import { route } from "./routes";

const app = express();

const port = 3004;
app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
