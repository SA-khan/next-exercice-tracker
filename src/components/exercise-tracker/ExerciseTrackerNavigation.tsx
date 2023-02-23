import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'

const ExerciseTrackerNavigation = () => {
    return <React.Fragment>
        <div className='card p-2 mb-2'>
            Login | Add | Update | Delete
        </div>
    </React.Fragment>;
}

export default ExerciseTrackerNavigation;