import express, {NextFunction, Request, Response} from "express";
import { WeatherController } from "./controllers/weatherController";
import { errorHandler } from "./midllewars/errorHandlers";
import { API_KEY } from "./constantes/config";

import dotenv from "dotenv";
dotenv.config();

const cors = require("cors");

const app = express();
const weatherController = new WeatherController(API_KEY);

const PORT : number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors());

app.get("/test", (req:Request, res:Response) => {
    res.send("Coucou je suis dans l'API météo");
});

app.get("/weather/:city", async (req:Request, res:Response, next:NextFunction) => {
    await weatherController.getWeather(req, res, next);
});

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Le serveur est en cours d'exécution sur la port ${PORT}`);
});
