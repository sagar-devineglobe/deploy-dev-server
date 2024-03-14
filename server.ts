import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./router/route";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/template", router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
