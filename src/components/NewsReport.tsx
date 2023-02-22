import React from 'react'
import Image from 'next/image'
import  utilStyles  from '../styles/utils.module.css'
import { NewsModel } from '@/models/NewsModel';
import { NewsTypeEnum } from "@/enums/NewsTypeEnum";

const NewsReport = (news: NewsModel) => {
    return <React.Fragment>
        <div className='card p-2 mb-2'>
            <Image priority className='card-img-top' src="/images/news1.jpg" width={380} height={380} alt="news image" />
            <div className='card-body'>
                <h5 className={utilStyles.headingMd +' card-title'} > {news.title} -  <kbd>{news.reportingDate}</kbd> </h5>
               
                <p className={utilStyles.lightText + ' card-text'}> {news.description} </p>
                <a className='btn btn-primary' href={news.sourceUrl}>Read more</a>
            </div>
        </div>
    </React.Fragment>;
}

export default NewsReport;