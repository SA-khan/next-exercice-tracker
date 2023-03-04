import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'

const WeatherSummary = (weather: WeatherModel) => {
    return <React.Fragment>
        <div className='card p-2 mb-2'>
            <div id="weather_view" className={utilStyles.weather_view}>
                <div id='globe_view' className={utilStyles.globe_view + ' shadow rounded-circle border border-light bg-light'}>
                    
                </div>
                <div id='country_map' className={utilStyles.country_map + ' shadow bg-light'}>
                    
                </div>
                <div id='city_map' className={utilStyles.city_map + ''}>
                    
                </div>
            </div>
            <div className='card-body'>
                <div className='row p-2 border border-dark'>
                 <div className='col-1'>
                    <div id='city_view' className={utilStyles.city_view + ' rounded-circle pt-2'}>
                        {weather.title}
                    </div>
                 </div>
                 <div className='col'>
                    <div className='d-inline'>
                        <p id="city_name" className={utilStyles.headingLg + ' d-inline'}> {weather.city?.name} - </p> <em>{weather.city?.title}</em>
                    </div>
                 </div>
               </div>

               <div className='row m-2 border border-dark'>
                 <div className='col-1'>
                    <div id='country_view' className={utilStyles.country_view + ' rounded-circle pt-2'}>
                    </div>
                 </div>
                 <div className='col'>
                    <div className=''>
                        <p id="country_name" className={utilStyles.headingLg + ''}> {weather.country?.name} </p>
                    </div>
                 </div>
               </div>
                
                <a className='btn btn-primary'>Read more</a>
            </div>
        </div>
    </React.Fragment>;
}

export default WeatherSummary;