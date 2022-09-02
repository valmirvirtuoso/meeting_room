import express from "express";
import { appRoutes } from "./routes";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";


const app = express();

app.use(express.json());

appRoutes(app);

app.use(handleErrorMiddleware);

app.listen(3000);