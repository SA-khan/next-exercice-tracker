import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { NewsModel } from '@/models/NewsModel';
import { NewsTypeEnum } from "@/enums/NewsTypeEnum";
import { NewsArticleModel } from '@/models/NewsArticleModel';
import NewsReport from '../NewsReport';
import Link from 'next/link'
import { NewsService } from '@/services/NewsService';
import Goto from '../../controls/Goto';
let api_call = (new NewsService()).GetGNews('business');

const BusinessComponent = () => {

    const [articles, setArticles] = useState<NewsArticleModel[] | undefined>()

    useEffect(()=>{
        var call = async () => {
            var response = api_call.then(x=>setArticles(x.articles));
        }
        call();
    });

    return <React.Fragment>
        <div className='overflow-scrollable'>
            <hr />
            <NewsReport {...articles?.[0]} />
            <hr />
            <NewsReport {...articles?.[1]} />
            <hr />
            <NewsReport {...articles?.[2]} />
            <hr />
            <NewsReport {...articles?.[3]} />
            <hr />
            <div className='w-100 text-center align-center float-right'>
                <Goto title='View more' href="/news/business/" />
            </div>
        </div>
    </React.Fragment>;
}

export default BusinessComponent;