import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import  utilStyles  from '../../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'

const ExerciseTrackerNavigation = () => {
    return <React.Fragment>
        <div className='mt-3 mb-4 w-100'>
        <div className='shadow card p-2 mt-2 mb-2 d-inline'>
            <Link className='text-decoration-none d-inline' href="/exercise/Login">Login</Link> | 
            <Link className='text-decoration-none d-inline' href="/exercise/Add"> Add </Link> | Update | Delete
        </div>
        </div>
    </React.Fragment>;
}

export default ExerciseTrackerNavigation;