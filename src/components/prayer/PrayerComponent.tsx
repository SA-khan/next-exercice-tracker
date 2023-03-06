import React, { useState, useEffect } from 'react'
import PrayerLayout from './PrayerLayout';
import PrayerFilter from './PrayerFilter';
import { PrayerModel } from '@/models/PrayerModel';
import { PrayerService } from '@/services/PrayerService';
import utilsStyles from '../../styles/utils.module.css'
let response = new PrayerService().GetLatestPrayerTime();
import { createStore } from 'redux';

const PrayerComponent = () => {

    const [prayer, setPrayer] = useState(new PrayerModel());
    
    useEffect(() => {
        const call = async () => { 
            var data = response.then((x) => setPrayer(x))
        }
        call()
    });

    return <React.Fragment>
            <PrayerLayout>
            
            <PrayerFilter cityParam='karachi' countryParam='pakistan' />
            <div className={utilsStyles.pr_background + ' mt-2 mb-2 p-2 card shadow'}>
                <div className='text-center text-white w-100'>
                    <div className='bg-dark p-1 m-1'>
                        <h6 className='h6 bg-light text-black p-2'> Timezone: {prayer.data?.meta?.timezone}</h6>
                        <p className=''> Islamic Date: {prayer.data?.date?.hijri?.date} ({prayer.data?.date?.hijri?.day} - {prayer.data?.date?.hijri?.month?.en} ( {prayer.data?.date?.hijri?.month?.ar} ) - {prayer.data?.date?.hijri?.year } ) - </p> 
                        <p className=''> Gregorian Date: {prayer.data?.date?.gregorian?.date} - ( {prayer.data?.date?.gregorian?.weekday?.en} {prayer.data?.date?.gregorian?.month?.en} {prayer.data?.date?.gregorian?.day}, {prayer.data?.date?.gregorian?.year} ) </p>   
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Sunrise</strong> : <em>{prayer.data?.timings?.Sunrise}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Fajr Time</strong> : <em>{prayer.data?.timings?.Fajr}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Dhuhr Time</strong> : <em>{prayer.data?.timings?.Dhuhr}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Asr Time</strong> : <em>{prayer.data?.timings?.Asr}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Sunset</strong> : <em>{prayer.data?.timings?.Sunset}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Maghrib Time</strong> : <em>{prayer.data?.timings?.Maghrib}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Isha Time</strong> : <em>{prayer.data?.timings?.Isha}</em></kbd></p>
                    </div>
                    <div className='col-6 float-right pull-right align-right'>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Latitude</strong> : <em>{prayer.data?.meta?.latitude}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Longitude</strong> : <em>{prayer.data?.meta?.longitude}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Latitude Method</strong> : <em>{prayer.data?.meta?.latitudeAdjustmentMethod}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>Midnight Mode</strong> : <em>{prayer.data?.meta?.midnightMode}</em></kbd></p>
                        <p className='text-white m-1 p-1 h4'><kbd><strong>School</strong> : <em>{prayer.data?.meta?.school}</em></kbd></p>
                    </div>
                </div>
                

            </div>
        </PrayerLayout>
    </React.Fragment>;
}

export default PrayerComponent;