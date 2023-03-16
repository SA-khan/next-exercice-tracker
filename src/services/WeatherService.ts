import  Envelop  from "@/models/Envelop";
import { WeatherModel } from "@/models/WeatherModel";

const KEY = process.env.WEATHERAPI_KEY

export class WeatherService {
    constructor() { 

     }
    public async GetLatestWeatherUpdates(city: string = 'Karachi') : Promise<WeatherModel> {
        if (!KEY) {
            throw new Error(
              'Please define the MONGODB_URI environment variable inside .env.local'
            )
        }
        var data: WeatherModel = await fetch("http://api.weatherapi.com/v1/current.json?key="+KEY+"&q="+city+"&aqi=yes")
                        .then((x) => x.json() );
        return data;
    }
}