import {Request, Response, NextFunction } from "express";
import { UNKNOW_ERROR_MESSAGE } from "../constantes/errorMessage";
import { UNKNOW_ERROR, WEATHER_API_ERROR } from "../constantes/errorCodes";
import { CustomError } from "../errors/CustomError";


export function errorHandler ( err:Error, req:Request, res:Response, next:NextFunction){
    console.error(err.stack);
    if(err instanceof CustomError){
        res.status(500).json({error:err.message, errorCode:WEATHER_API_ERROR});
    }else{
        res.status(500).json({error:UNKNOW_ERROR_MESSAGE, errorCode:UNKNOW_ERROR})
    }
}