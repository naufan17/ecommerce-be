import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compress from "compression";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import "./config/database";

const openApiDocument = YAML.load("./docs/openapi.yaml");
const port: number = Number(process.env.PORT) || 8000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 
app.use(helmet());
app.use(morgan('combined'));
app.use(compress());
app.use('/api/v1', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on http://localhost:${port}`);
});

export default app;