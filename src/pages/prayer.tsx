import React, { useState, useEffect } from 'react'
import PrayerLayout from '@/components/prayer/PrayerLayout';
import PrayerFilter from '@/components/prayer/PrayerFilter';
import utilsStyles from '../styles/utils.module.css'
import { PrayerService } from '@/services/PrayerService';
import { PrayerModel } from '@/models/PrayerModel';
import PrayerComponent from '@/components/prayer/PrayerComponent';
let response = new PrayerService().GetLatestPrayerTime(); 


const Prayer = () => {
    return <React.Fragment>
        <PrayerComponent />
    </React.Fragment>;
}

export default Prayer;