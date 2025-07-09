import { DATABASE_ERROR } from "../constantes/errorCodes";
import { CustomError } from "./CustomError";

export class DatabaseError extends CustomError{
    constructor(message:string){
        super(message,DATABASE_ERROR);
        this.name="DatabaseError";
    }
}