import React, { useState, useEffect } from 'react'
import { Envelop } from '@/models/Envelop';
import { WeatherService } from '@/services/WeatherService';
import { WeatherModel } from '@/models/WeatherModel';
import Image from 'next/image'
let api_call = (new WeatherService()).GetLatestWeatherUpdates();


const WeatherComponent = ({}) => {

    const [envelop, setEnvelop] = useState([new Envelop()]);
    const [weather, setWeather] = useState(new WeatherModel());

    useEffect(()=>{
        let call = async () => {
            await api_call.then( x => setWeather(x) );
        }
        call();

        var coordinates = document.getElementById('geo_txt');
        coordinates.value = weather.location?.lon + ", " + weather.location?.lat;

        const isDay = weather.current?.is_day; // ? (document.getElementById('main_view')?.classList.add('bg-light')) : (document.getElementById('main_view')?.classList.add('bg-dark'))
        console.log("Day-"+isDay)
        if(isDay == true) {
            if(document.getElementById("main_view").classList.contains('bg-light')){
                console.log("contains");
                
            }
            else {
                console.log("not contains");
                document.getElementById("main_view").classList.remove('bg-dark');
                document.getElementById('main_view')?.classList.add('bg-light');
            }
        }
        else {
            if(document.getElementById("main_view").classList.contains('bg-dark')){
                console.log("contains");
                
            }
            else {
                console.log("not contains");
                document.getElementById("main_view").classList.remove('bg-light');
                document.getElementById('main_view')?.classList.add('bg-dark');
            }
        }


        document.getElementById('region_select').value = weather.location?.tz_id?.replace("/Karachi","");
        document.getElementById('country_select').value = weather.location?.country;
        document.getElementById('city_select').value = weather.location?.name;

    });

    return <React.Fragment>
        <div className='bg-light card shadow m-2'>
                <div className='row p-2 mt-2'>
                    <p className='col-3'>State: <strong>{weather.location?.region} </strong></p>
                    <p className='col-3'>Country: <strong>{weather.location?.country}</strong></p>
                    <p className='col-3'>City: <strong>{weather.location?.name}</strong></p>
                    <p className='col-3'>Time Zone: <strong>{weather.location?.tz_id}</strong> ({weather?.current?.is_day ? "Day" : "Night"})</p>
                </div>
        </div>
        <div className='bg-light card shadow m-2'>
            <div className='row m-2'>
                <div className='col-6'>
                    <p>Temperature in Celcius: <strong>{weather.current?.temp_c}°C</strong> <em>( Feels Like: {weather.current?.feelslike_c}°C )</em> </p>
                    <p>Temperature in Fehrenheit: <strong>{weather.current?.temp_f}°F</strong> <em>( Feels Like {weather.current?.feelslike_f}°F )</em></p>
                </div>
                <div className='col-3'>
                    <p>Weather: <strong>{weather.current?.condition?.text}</strong></p>
                    <p>Clouds: <strong>{weather.current?.cloud}%</strong></p>
                </div>
                <div className='col-3'>
                    <p>Humidity: <strong>{weather.current?.humidity}</strong></p>
                    <p>Wind Speed: <strong>{weather.current?.wind_kph} KPH</strong></p>
                </div>
            </div>
        </div>
    </React.Fragment>;
}

export default WeatherComponent;