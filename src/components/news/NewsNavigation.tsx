import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  utilStyles  from '../../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'

const NewsNavigation = () => {
    return <React.Fragment>
        <div className='mt-1 mb-1 w-100 card card-dark'>
        <div className='mt-2 mb-2 text-center d-inline w-100'>
            <Link className='text-decoration-none' href='/news/breaking'>Breaking</Link> | 
            <Link className='text-decoration-none' href='/news/national'> National</Link> | 
            <Link className='text-decoration-none' href='/news/worldwide'> Worldwide</Link> | 
            <Link className='text-decoration-none' href='/news/technology'> Technology</Link> | 
            <Link className='text-decoration-none' href='/news/health'> Health</Link> | 
            <Link className='text-decoration-none' href='/news/lifestyle'> Lifestyle</Link> | 
            <Link className='text-decoration-none' href='/news/gossip'> Gossip </Link> |  
            <Link className='text-decoration-none' href='/news/others'> Others </Link>
        </div>
        </div>
    </React.Fragment>;
}

export default NewsNavigation;