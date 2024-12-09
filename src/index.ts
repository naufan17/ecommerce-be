import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import compress from "compression";
import routes from "./routes";
import "./config/database";

const port: number = Number(process.env.PORT) || 8000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compress());
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on http://localhost:${port}`);
});

export default app;