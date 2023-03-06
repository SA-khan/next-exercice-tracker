import { PrayerDateModel } from "./PrayerDateModel";
import { PrayerMetaModel } from "./PrayerMetaModel";
import { PrayerTimingModel } from "./PrayerTimingModel";

export class PrayerDataModel {
    constructor(
        public timings?: PrayerTimingModel,
        public date?: PrayerDateModel, 
        public meta?: PrayerMetaModel
    ) {  }
}