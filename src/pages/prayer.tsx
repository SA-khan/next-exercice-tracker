import React, { useState } from 'react'
import PrayerLayout from '@/components/prayer/PrayerLayout';
import PrayerFilter from '@/components/prayer/PrayerFilter';
import utilsStyles from '../styles/utils.module.css'
import { PrayerService } from '@/services/PrayerService';
import { PrayerModel } from '@/models/PrayerModel';


var service = new PrayerService();


const Prayer = () => {
    const [prayer, setPrayer] = useState(new PrayerModel);
    return <React.Fragment>
        <PrayerLayout>
            <PrayerFilter />
            <button onClick={()=> { setPrayer(service.GetLatestPrayerTime()); console.log(prayer) } }>Click</button>
                <p>{prayer?.code}</p>
            <div className={utilsStyles.pr_background}>
                
            </div>
        </PrayerLayout>
    </React.Fragment>;
}

export default Prayer;