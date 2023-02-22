import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'

const WeatherSummary = (weather: WeatherModel) => {
    return <React.Fragment>
        <div className='card p-2 mb-2'>
            <Image priority className='card-img-top' src="/images/snow.gif" width={380} height={380} alt="weater image" />
            <div className='card-body'>
                <h5 className={utilStyles.headingMd +' card-title'} > {weather.city?.name} - {weather.temperatureInFahrenheit} -  <kbd>{weather.temperatureInCelsius}</kbd> </h5>
               
                <p className={utilStyles.lightText + ' card-text'}> {weather.country?.name} </p>
                <a className='btn btn-primary'>Read more</a>
            </div>
        </div>
    </React.Fragment>;
}

export default WeatherSummary;