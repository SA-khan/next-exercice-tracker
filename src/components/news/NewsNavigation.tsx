import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'

const NewsNavigation = () => {
    return <React.Fragment>
        <div className='card p-2 mb-2 text-center'>
            Breaking | National | Worldwide | Technology | Health | Lifestyle | Gossip |  Others
        </div>
    </React.Fragment>;
}

export default NewsNavigation;