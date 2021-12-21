import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("O servidor está pronto");
});

export default app;
