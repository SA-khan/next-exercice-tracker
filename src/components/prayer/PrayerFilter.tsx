import React, { useState, useEffect } from 'react'
import { PrayerService } from '@/services/PrayerService';
import { PrayerModel } from '@/models/PrayerModel';
import PrayerComponent from './PrayerComponent';
let response = new PrayerService().GetLatestPrayerTime();

const PrayerFilter = ({cityParam, countryParam} : {cityParam: string, countryParam: string}) => {
    const [city, setCity] = useState(cityParam)
    const [country, setCountry] = useState(countryParam)
    const [prayer, setPrayer] = useState(new PrayerModel());

    useEffect(() => {
        const call = async () => { 
            var data = response.then((x) => setPrayer(x))
        }
        call()
    });

    const handleClickGo = () => {
        console.log(city + ', ' + country)
    }

    return <React.Fragment>
        <div className='row mt-2 mb-2'>
            <div className='col-4'>
                <label htmlFor='city'> City &nbsp;
                    <input value={city} placeholder="Enter city name" onChange={(e)=>setCity(e.target.value)}/>
                </label>
            </div>
            <div className='col-4'>
                <label htmlFor='country'> Country &nbsp;
                    <input value={country} placeholder="Enter country name" onChange={(e)=>setCountry(e.target.value)}/>
                </label>
            </div>
            <div className='col align-right w-100'>
                <button className='btn btn-sm btn-primary align-right' onClick={()=>handleClickGo()}> Go </button>
            </div>
        </div>
    </React.Fragment>;
}

export default PrayerFilter;