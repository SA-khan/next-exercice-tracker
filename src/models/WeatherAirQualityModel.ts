export class WeatherAirQualityModel {
    constructor(
        public co?: number,
        public no2?: number,
        public o3?: number,
        public so2?: number,
        public pm2_5?: number,
        public pm10?: number,
        public us_epa_index?: number,
        public gb_defra_index?: number
    ) {  }
}