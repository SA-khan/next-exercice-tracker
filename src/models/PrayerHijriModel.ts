import { PrayerHijriMonthModel } from './PrayerHijriMonthModel'

export class PrayerHijriModel {
    constructor(
        public date?: string,
        public format?: string,
        public day?: string,
        public weekday?: any,
        public month?: PrayerHijriMonthModel,
        public year?: string,
        public designation?: any,
        public holidays?: any,
    ) { }
}