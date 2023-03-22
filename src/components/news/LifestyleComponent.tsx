import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { NewsModel } from '@/models/NewsModel';
import { NewsTypeEnum } from "@/enums/NewsTypeEnum";
import { NewsArticleModel } from '@/models/NewsArticleModel';
import NewsReport from './NewsReport';
import Link from 'next/link'
import { NewsService } from '@/services/NewsService';
let api_call = (new NewsService()).GetGNews();

const LifestyleComponent = () => {

    const [articles, setArticles] = useState<NewsArticleModel[] | undefined>();

    useEffect(() => {
        const call = async () => {
            var response = api_call.then(x=>setArticles(x?.articles))
        }
        call();
    });

    return <React.Fragment>
        <div className='overflow-scrollable'>
            <hr />
            <NewsReport {...articles?.[1]} />
            <hr />
            <NewsReport {...articles?.[2]} />
            <hr />
            <NewsReport {...articles?.[3]} />
            <hr />
            <NewsReport {...articles?.[4]} />
            <hr />
            <div className='text-center'>
            <Link className='m-2 text-decoration-none' href='/news/lifestyle/list'>See All</Link>
            </div>
        </div>
    </React.Fragment>;
}

export default LifestyleComponent;