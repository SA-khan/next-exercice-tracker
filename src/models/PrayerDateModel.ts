import { PrayerHijriModel } from "./PrayerHijriModel";
import { PrayerGregorianModel } from "./PrayerGregorianModel";

export class PrayerDateModel {
    constructor(
        public readable?: string,
        public timestamp?: number,
        public hijri?: PrayerHijriModel,
        public gregorian?: PrayerGregorianModel,
    ) {  }
}