import { PrayerModel } from "@/models/PrayerModel";

export class PrayerService {

    constructor() {}

    async GetLatestPrayerTime(city: string = 'karachi', country: string = 'pakistan') : Promise<PrayerModel> {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
                            
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
                            
        const formattedToday = dd + '-' + mm + '-' + yyyy;

        var call = await fetch("https://api.aladhan.com/v1/timingsByCity/"+formattedToday+"?city="+city+"&country="+country+"&method=8")
                            .then( (response) => response.json());
        return call;
    }
}