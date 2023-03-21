import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { NewsService } from '@/services/NewsService';
import { NewsModel } from '@/models/NewsModel';
import NewsList from './news/NewsList';
let api_call = (new NewsService()).GetLatestNews();

const NewsSummary = () => {

    const[news, setNews] = useState(new NewsModel())

    useEffect(()=>{
        const call = async() => {
            var response = await api_call.then(x=>setNews(x));
            console.log(response);
        }
        call();
    });

    return <React.Fragment>
        <div className='card shadow mt-3 mb-3 p-2'>
            <div className='row m-2 mb-3'>
                <div className='col-7'>
                    <div className='w-100 mb-2 border border-light shadow p-2'>
                        <img id="headine-img" className='p-3' height={300} src={news?.articles?.[0]?.urlToImage?.trim()} alt={news?.articles?.[0]?.urlToImage ?? 'headline-image'} />
                        <div className='float-right bg-light text-justify text-right'>
                            <span className='badge badge-primary text-danger p-3'><em>Source:  {news?.articles?.[0]?.source?.name}</em></span>
                            <span className='text-nowrap bd-highligh'><kbd>Published:  {news?.articles?.[0]?.publishedAt?.slice(0,11).replace('T', ' ').replace('Z', ' ')}</kbd></span>
                        </div>
                        <h6 id='headline-title' className='mt-2 px-3 w-100'>
                            {news?.articles?.[0]?.title ?? 'Demo Headline'}
                        </h6>
                        <p id='headline-text' className='text-dark px-3'>{news?.articles?.[0]?.description?.substring(0, 120) + '...' ?? 'Demo Text'}<span className='d-inline-block'><a className='' target='_blank' rel="noreferrer" href={news?.articles?.[0]?.url}> Read more</a></span></p>
                    </div>
                    <div className='text-center'><em>Source Reference: <strong>newsapi.org</strong></em></div>
                </div>
                <div className='col'>
                    <div className='w-100 mb-2 border border-light shadow p-2'>
                        <NewsList {...news.articles} />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>;
}

export default NewsSummary;