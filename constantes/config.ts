import dotenv from "dotenv";
dotenv.config();


export const API_KEY = process.env.WEATHER_API_KEY || "default_api_key";
export const WEATHER_API_URL="http://api.weatherapi.com/v1/";