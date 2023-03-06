import React from 'react'
import { PrayerService } from '@/services/PrayerService'
import { PrayerModel } from '@/models/PrayerModel'

const PrayerReducer = (prayer = new PrayerModel(), action) => {
    switch(action.type) {
        case 'PRAYER_KARACHI_PAKISTAN': 
             return (new PrayerService()).GetLatestPrayerTime('karachi', 'pakistan')
        case 'PRAYER_ISLAMABAD_PAKISTAN': 
            return (new PrayerService()).GetLatestPrayerTime('islamabad', 'pakistan')
        case 'PRAYER_LAHORE_PAKISTAN': 
            return (new PrayerService()).GetLatestPrayerTime('lahore', 'pakistan')
        case 'PRAYER_MULTAN_PAKISTAN': 
           return (new PrayerService()).GetLatestPrayerTime('multan', 'pakistan')
    }
}