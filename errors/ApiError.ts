import { WEATHER_API_ERROR } from "../constantes/errorCodes";
import { CustomError } from "./CustomError";

export class ApiError extends CustomError{
    constructor(message:string){
        super(message,WEATHER_API_ERROR);
        this.name="ApiError";
    }
}