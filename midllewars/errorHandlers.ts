import {Request, Response, NextFunction } from "express";
import { UNKNOW_ERROR_MESSAGE } from "../constantes/errorMessage";
import { UNKNOW_ERROR, WEATHER_API_ERROR } from "../constantes/errorCodes";

export class WeatherError extends Error {
    errorCode : number;

    constructor (message:string){
        super(message);
        this.name="WeatherError";
    }
}

export function errorHandler ( err:Error, req:Request, res:Response, next:NextFunction){
    console.error(err.stack);
    if(err instanceof WeatherError){
        res.status(500).json({error:err.message, errorCode:WEATHER_API_ERROR});
    }else{
        res.status(500).json({error:UNKNOW_ERROR_MESSAGE, errorCode:UNKNOW_ERROR})
    }
}