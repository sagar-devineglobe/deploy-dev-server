import * as express from "express";

const router = express.Router();

router.post("/", (req, res: express.Response) => {
  res.send({ data: [{ name: "user" }], name: "test" });
});

export default router;
