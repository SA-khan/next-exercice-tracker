import { PrayerDataModel } from "./PrayerDataModel";
import { PrayerMetaModel } from "./PrayerMetaModel";
import { PrayerTimingModel } from "./PrayerTimingModel";
export class PrayerModel {
    constructor (
        public code?: number,
        public status?: string,
        public data?: PrayerDataModel,
    ) { }
}