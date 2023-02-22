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

const Index = () => {
    const flag = new FlagModel(1, "pk", "Pakistan Flag", 'pk.png', true);
    const region = new RegionModel(1, 'South Asia', 'South Asia Region','images/regions/SouthAsia.png', true);
    const country = new CountryModel(1, 'Pakistan', 'Islamic Repulic of Pakistan', flag, region, true )
    const city = new CityModel(1, 'Karachi', 'City of Lights', country, true );
    const weather = new WeatherModel(1,'KHI-021','Karachi', 'Karachi Weather', WeatherTypeEnum.Clear, DayTypeEnum.Day, '19C', '20C', '302F', city, country, '2023-02-22' )
    return <React.Fragment>
        <Layout>
            <PageHeading title="Weather Updates" source="weather.jfif" />
            <div>
                <WeatherSummary {...weather}  />
            </div>
        </Layout>
    </React.Fragment>;
}

export default Index;