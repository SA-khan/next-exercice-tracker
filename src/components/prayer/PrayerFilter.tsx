import React, { useState } from 'react'

const PrayerFilter = () => {
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

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