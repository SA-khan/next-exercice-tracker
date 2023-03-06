import { PrayerGregorianMonthModel } from "./PrayerGregorianMonthModel";
import { PrayerGregorianWeekdayModel } from "./PrayerGregorianWeekdayModel";

export class PrayerGregorianModel {
    constructor (
        public date?: string,
        public format?: string,
        public day?: string,
        public weekday?: PrayerGregorianWeekdayModel,
        public month?: PrayerGregorianMonthModel,
        public year?: string,
        public designation?: any,
    ) {  }
}