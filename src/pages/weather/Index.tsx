import React from 'react'
import PageHeading from '../../components/shared/PageHeading'
import Layout from '../../components/Layout'
import Image from 'next/image'
import WeatherSummary from '@/components/WeatherSummary'
import { WeatherModel } from '@/models/WeatherModel'
import { WeatherTypeEnum } from '@/enums/WeatherTypeEnum'
import { DayTypeEnum } from '@/enums/DayTypeEnum'
import { CityModel } from '@/models/CityModel'
import { CountryModel } from '@/models/CountryModel'
import { FlagModel } from '@/models/FlagModel'
import { RegionModel } from '@/models/RegionModel'
import { GeoCoordinateModel } from '@/models/GeoCoordinateModel'
import { CurrencyModel } from '@/models/CurrencyModel'
import WeatherNavigation from '@/components/weather/WeatherNavigation'

const Index = () => {
    const flag = new FlagModel(1, "pk", "Pakistan Flag", '/images/countries/pk.png', true);
    const geoLocationRegion = new GeoCoordinateModel(1, 'South Asia Coordinates', 'South Asia Coordinates', 122.5164000, 9.5506000, '/images/regions/south_asia.jpg', true);
    const regionSouthAsia = new RegionModel(1, 'REG-SA', 'South Asia', 'South Asia Region', '/images/regions/SouthAsia.png', geoLocationRegion, true);
    const currencyPakistan = new CurrencyModel(1, 'pk-RUPEE', 'Pakistani Rupee', 'PKR', 'Pakistani Rupee Currency', '/images/currencies/pkr.png', true );
    const geoLocationPakistan = new GeoCoordinateModel(2, 'Pakistan', 'Pakistan Coordinates', 73.084488, 33.738045, '/images/countries/pakistan.jpg', true);
    const country = new CountryModel(1, 'COUN-PK', 'Pakistan', 'Islamic Repulic of Pakistan', 'pk', '/images/countries/pakistan.jpg', geoLocationPakistan, flag, regionSouthAsia, currencyPakistan, 31, 3_000_0000, true )
    const geoLocationKarachi = new GeoCoordinateModel(3, 'Karachi', 'Karachi Pakistan Coordinates', 66.990501, 24.860966, '/images/cities/pakistan-karachi.jpg', true);
    const city = new CityModel(1, 'pk-KHI', 'Karachi', 'City of Lights', 'KHI', '/images/cities/pakistan_karachi.jfif', geoLocationKarachi, 'The City of Lights Karachi', country, true );
    const weather = new WeatherModel(1,'KHI-021', 'Clear Weather', 'Karachi Weather', WeatherTypeEnum.Clear, DayTypeEnum.Day, '19C', '20C', '302F', city, country, '2023-02-22' )
    return <React.Fragment>
        <Layout>
            <PageHeading title="Weather Updates" source="weather.jfif" />
            <WeatherNavigation />
            <>
                <WeatherSummary   {...weather}/>
            </>
        </Layout>
    </React.Fragment>;
}

export default Index;