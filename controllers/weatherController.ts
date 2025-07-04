import { NextFunction, Request, Response } from "express";
import axios, {AxiosResponse} from "axios";
import { WeatherError } from "../midllewars/errorHandlers";
import { WEATHER_API_ERROR_MESSAGE } from "../constantes/errorMessage";
import { WEATHER_API_URL } from "../constantes/config";

export class WeatherController {
    private API_KEY : string;

    constructor (apiKey : string){
        this.API_KEY = apiKey;
    }

    public async getWeather (req:Request, res:Response, next:NextFunction):Promise<void>{
        const city : string = req.params.city;
        try{
            const response : AxiosResponse = await axios.get(
                `${WEATHER_API_URL}current.json?key=${this.API_KEY}&q=${city}`
            );
            const data = response.data;
            res.json(data);
        }catch(error){
            next(new WeatherError(WEATHER_API_ERROR_MESSAGE));
        }
    }
}