import { PrayerDateModel } from "./PrayerDateModel";
import { PrayerTimingModel } from "./PrayerTimingModel";
export class PrayerModel {
    constructor (
        public code?: number,
        public status?: string,
        public timings?: PrayerTimingModel,
        public date?: PrayerDateModel
    ) { }
}