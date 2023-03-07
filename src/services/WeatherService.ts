import { Envelop } from "@/models/Envelop";
import { WeatherModel } from "@/models/WeatherModel";

export class WeatherService {
    constructor() {  }
    public async GetLatestWeatherUpdates(city: string = 'Karachi') : Promise<WeatherModel> {
        var data: WeatherModel = await fetch("http://api.weatherapi.com/v1/current.json?key=0ba6688f853249878b6104809230403&q="+city+"&aqi=yes")
                        .then((x) => x.json() );
        console.log(data);
        return data;
    }
}