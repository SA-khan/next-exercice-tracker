import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { NewsModel } from '@/models/NewsModel';
import { NewsTypeEnum } from "@/enums/NewsTypeEnum";
import { NewsArticleModel } from '@/models/NewsArticleModel';
import NewsReport from './NewsReport';
import Link from 'next/link'

const NewsList = (newsParam?: NewsModel) => {
    return <React.Fragment>
        <div className='overflow-scrollable'>
            <hr />
            <NewsReport {...newsParam?.articles?.[1]} />
            <hr />
            <NewsReport {...newsParam?.articles?.[2]} />
            <hr />
            <NewsReport {...newsParam?.articles?.[3]} />
            <hr />
            <NewsReport {...newsParam?.articles?.[4]} />
            <hr />
            <div className='text-center'>
            <Link className='text-decoration-none' href='/news/breaking'>See All</Link>
            </div>
        </div>
    </React.Fragment>;
}

export default NewsList;