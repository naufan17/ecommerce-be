import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

router.use((req: Request, res: Response) => {
  res.status(404).send("Route Not Found");
})

router.use((err: unknown, req: Request, res: Response) => {
  res.status(500).send("Internal Server Error");
})

export default router;