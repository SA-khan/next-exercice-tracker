import { PrayerModel } from "@/models/PrayerModel";

export class PrayerService {

    constructor() {}

    async GetLatestPrayerTime() : PrayerModel {
        var call = await fetch("https://api.aladhan.com/v1/timingsByCity/06-03-2023?city=Karachi&country=Pakistan&method=8")
                            .then( (response) => response.json())
                            .then( (data) => { console.log(data); return data; })
    }
}