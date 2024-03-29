import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { NewsModel } from '@/models/NewsModel';
import { NewsTypeEnum } from "@/enums/NewsTypeEnum";
import { NewsArticleModel } from '@/models/NewsArticleModel';
import NewsReport from './NewsReport';
import Link from 'next/link'

const GossipComponent = () => {
    return <React.Fragment>
        <div className='overflow-scrollable'>
            <hr />
            {/* <NewsReport {...news?.[1]} />
            <hr />
            <NewsReport {...news?.[2]} />
            <hr />
            <NewsReport {...news?.[3]} />
            <hr />
            <NewsReport {...news?.[4]} /> */}
            <hr />
            <div className='text-center'>
            <Link className='m-2 text-decoration-none' href='/news/breaking'>See All</Link>
            </div>
        </div>
    </React.Fragment>;
}

export default GossipComponent;