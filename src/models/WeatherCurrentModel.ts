import { WeatherAirQualityModel } from "./WeatherAirQualityModel";
import { WeatherConditionModel } from "./WeatherConditionModel";

export class WeatherCurrentModel {
    constructor(
        public last_updated_epoch?: number,
        public last_updated?: string,
        public temp_c?: number,
        public temp_f?: number,
        public is_day?: boolean,
        public condition?: WeatherConditionModel,
        public wind_mph?: number,
        public wind_kph?: number,
        public wind_degree?: number,
        public wind_dir?: string,
        public pressure_mb?: number,
        public pressure_in?: number,
        public precip_mm?: number,
        public precip_in?: number,
        public humidity?: number,
        public cloud?: number,
        public feelslike_c?: number,
        public feelslike_f?: number,
        public wiz_km?: number,
        public wiz_miles?: number,
        public uv?: number,
        public gust_mph?: number,
        public gust_kph?: number,
        public air_quality?: WeatherAirQualityModel,
    ) {  }
}