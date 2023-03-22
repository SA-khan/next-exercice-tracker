import React, { useState } from 'react'
import Image from 'next/image'
import  utilStyles  from '../../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'

const WeatherNavigation = () => {

    const [region, setRegion] = useState("Select..")
    const getRegionUpdated = (e: any) => {
        console.log(e.target.value+ '-' + region)
        var regionName = e.target.value;
        var extension = ".png";
        switch(regionName) {
            case 'Africa':
                regionName = "africa";
                break;
            case 'Asia':
                regionName = "asia";
                break;
            case 'Antarctica':
                regionName = "antarctica";
                break;
            case 'Australia':
                regionName = "australia";
                break;
            case 'Europe':
                regionName = "europe";
                break;
            case 'North America':
                regionName = "north_america";
                break;
            case 'South America':
                regionName = "south_america";
                break;
            default:
                regionName = "regions"
        }
        var bg = document.getElementById('weather_view') as HTMLElement;
        var path = '/images/regions/' + regionName + extension;
        console.log(path);
        bg.style.backgroundImage = "url('" + path + "')";
        var globe = document.getElementById('globe_view') as HTMLElement;
        var globe_path = '/images/regions/' + regionName + '_globe' + extension;
        globe.style.backgroundImage = "url('" + globe_path + "')";
    }

    const [country, setCountry] = useState("Select..")

    const getCountryUpdated = () => {
    //     var countryName = e.toLowerCase();
    //     var extension = ".png";
    //     switch(countryName) {
    //         case 'pakistan':
    //             break;
    //         case 'uae':
    //             break;
    //         case 'uk':
    //             break;
    //         case 'usa':
    //             break;
    //         case 'others':
    //             break;
    //         default:
    //             break;
    //     }
    //     //var bg = document.getElementById('country_view');
    //     var path = '/images/countries/' + countryName + extension;
    //     console.log(path);
    //     //bg.style.backgroundImage = "url('" + path + "')";
    //    // var country_name = document.getElementById('country_name');
    //     //country_name.innerHTML = countryName.toUpperCase();
    //     var country_map = document.getElementById('country_map');
    //     path = '/images/coordinates/' + countryName + extension;
    //     country_map.style.backgroundImage = "url('" + path + "')";
    };

    const [city, setCity] = useState("")

    const getCityUpdated = () => {
        // var cityName = e.toLowerCase();
        // var extension = ".png";
        // switch(cityName) {
        //     case 'multan':
        //         break;
        //     case 'karachi':
        //         break;
        //     case 'lahore':
        //         break;
        //     case 'islamabad':
        //         break;
        //     case 'others':
        //         break;
        //     default:
        //         break;
        // }
 
       // var city_name = document.getElementById('city_name');
       // city_name.innerHTML = cityName.toUpperCase();
        //var city_map = document.getElementById('city_map');
        //var path = '/images/coordinates/' + cityName + extension;
        //city_map.style.backgroundImage = "url('" + path + "')";
    };

    const [search, setSearch] = useState("")
    return <React.Fragment>
        <div className={utilStyles.fonts}>
        <div className={utilStyles.carder}>
            <div className='row no-gutters border border-dark p-2 bg-light'>
                <div className='d-inline col-3'>
                    <label> <strong>Region</strong> &nbsp;
                        <select id="region_select" value={region} placeholder=" Search here " onChange={(e)=>{ setRegion(e.target.value); getRegionUpdated(e) }}>
                            <option>Select..</option>
                            <option>Africa</option>
                            <option>Asia</option>
                            <option>Antarctica</option>
                            <option>Australia</option>
                            <option>Europe</option>
                            <option>North America</option>
                            <option>South America</option>
                        </select>
                    </label>
                </div>
                <div className='d-inline col-3'>
                    <label> &nbsp; <strong>Country</strong> &nbsp;
                        <select id="country_select" value={country} placeholder=" Search here " onChange={(e)=> { setCountry(e.target.value); getCountryUpdated() }} >
                            <option>Select..</option>
                            <option>Pakistan</option>
                            <option>UAE</option>
                            <option>UK</option>
                            <option>USA</option>
                            <option>Other</option>
                        </select>
                    </label>
                </div>
                <div className='d-inline col-3'>
                    <label> &nbsp; <strong>City</strong> &nbsp;
                        <select id="city_select" value={city} placeholder=" Search here " onChange={(e)=> { setCity(e.target.value); getCityUpdated(); } } >
                            <option>Select..</option>
                            <option>Multan</option>
                            <option>Karachi</option>
                            <option>Lahore</option>
                            <option>Islamabad</option>
                        </select>
                    </label>
                </div>
                <div className='d-inline col-3'>
                    <label><strong>Geo</strong> &nbsp;
                        <input id='geo_txt' className='pull-right w-75' value={search} placeholder="73.0844, 33.7380" onChange={(e)=>setSearch(e.target.value)} />
                    </label>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>;
}

export default WeatherNavigation;