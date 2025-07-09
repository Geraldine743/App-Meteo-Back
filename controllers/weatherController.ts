import { NextFunction, Request, Response } from "express";
import axios, {AxiosResponse} from "axios";
import { WEATHER_API_ERROR_MESSAGE } from "../constantes/errorMessage";
import { WEATHER_API_URL } from "../constantes/config";
import { ApiError } from "../errors/ApiError";
import { MinimalWeatherData } from "../interfaces/MinimalWeatherData";

export class WeatherController {
    private API_KEY : string;

    constructor (apiKey : string){
        this.API_KEY = apiKey;
    }

    public async getWeather (req:Request, res:Response, next:NextFunction):Promise<void>{
        const city : string = req.params.city;
        try{
            const response : AxiosResponse = await axios.get(
                `${WEATHER_API_URL}current.json?key=${this.API_KEY}&q=${city}&lang=fr`
            );
            const minimalData: MinimalWeatherData = {
                city:response.data.location.name,
                country:response.data.location.country,
                temperature:response.data.current.temp_c,
                condition:response.data.current.condition.text,
                icon:response.data.current.condition.icon
            }
            res.json(minimalData);
        }catch(error){
            next(new ApiError(WEATHER_API_ERROR_MESSAGE));
        }
    }
}