import { AuditableModel } from "./AuditableModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'
import { WeatherTypeEnum } from "@/enums/WeatherTypeEnum";
import { DayTypeEnum } from "@/enums/DayTypeEnum";
import { CityModel } from "./CityModel";
import { CountryModel } from "./CountryModel";
import { WeatherLocationModel } from './WeatherLocationModel'
import { WeatherCurrentModel } from "./WeatherCurrentModel";
import { RegionModel } from "./RegionModel";

export class WeatherModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public WeatherModelId?: number,
        public code?: string,
        public title?: string,
        public location?: WeatherLocationModel,
        public current?: WeatherCurrentModel,
        public description?: string,
        public weatherType?: WeatherTypeEnum,
        public dayType?: DayTypeEnum,
        public feelLike?: string,
        public temperatureInCelsius?: string,
        public temperatureInFahrenheit?: string,
        public city?: CityModel,
        public country?: CountryModel,
        public region?: RegionModel,
        public date?: string
    ) {
        super();
    }
}