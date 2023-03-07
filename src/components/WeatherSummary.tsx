import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'
import WeatherComponent from '@/components/weather/WeatherComponent'

const WeatherSummary = (weather: WeatherModel) => {
    return <React.Fragment>
        <div id='main_view' className='card p-2 mb-2'>
            <div id="weather_view" className={utilStyles.weather_view}>
                <div id='globe_view' className={utilStyles.globe_view + ' shadow rounded-circle border border-light bg-light'}>
                    
                </div>
                <div id='country_map' className={utilStyles.country_map + ' shadow bg-light'}>
                    
                </div>
                <div id='city_map' className={utilStyles.city_map + ''}>
                    
                </div>
            </div>
            < WeatherComponent regionParam = {weather.region}  cityParam = {weather.city} countryParam = {weather.country} />
            <div className='card-body'>
                <a className='btn btn-primary'>Read more</a>
            </div>
        </div>
    </React.Fragment>;
}

export default WeatherSummary;