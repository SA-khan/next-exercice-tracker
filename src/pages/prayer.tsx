import React from 'react'
import PrayerLayout from '@/components/prayer/PrayerLayout';
import PrayerFilter from '@/components/prayer/PrayerFilter';
import utilsStyles from '../styles/utils.module.css'

const Prayer = () => {
    return <React.Fragment>
        <PrayerLayout>
            <PrayerFilter />
            <div className={utilsStyles.pr_background}>

            </div>
        </PrayerLayout>
    </React.Fragment>;
}

export default Prayer;