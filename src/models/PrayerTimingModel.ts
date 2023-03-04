export class PrayerTimingModel {
    constructor(
        public Fajr?: string,
        public Sunrise?: string,
        public Dhuhr?: string,
        public Asr?: string,
        public Sunset?: string,
        public Maghrib?: string,
        public Isha?: string,
        public Imsak?: string,
        public Midnight?: string,
        public Firstthird?: string,
        public Lastthird?: string
    ) {  }
}