export class PrayerMetaModel {
    constructor(
        public latitude?: number,
        public longitude?: number,
        public timezone?: string,
        public method?: any,
        public latitudeAdjustmentMethod?: string,
        public midnightMode?: string,
        public school?: string,
        public offset?: any,
    ) {  }
}