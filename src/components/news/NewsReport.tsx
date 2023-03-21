import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { NewsModel } from '@/models/NewsModel';
import { NewsTypeEnum } from "@/enums/NewsTypeEnum";
import { NewsArticleModel } from '@/models/NewsArticleModel';

const NewsReport = (news: NewsArticleModel) => {
    return <React.Fragment>
        <div className='row no-gutters mt-2 mb-2'>
            <div className='col-4 text-center'>
                <img className='text-center' src={news.urlToImage} width={80} height={80} />
            </div>
            <div className='col'>
                <em>{news.title}</em>
                <a className='text-decoration-none' target='_blank' rel="noreferrer" href={news.url}> ..Read </a>
            </div>
        </div>
    </React.Fragment>;
}

export default NewsReport;