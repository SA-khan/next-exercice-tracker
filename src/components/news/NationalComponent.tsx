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

const NationalComponent = () => {

    const [articles, setArticles] = useState<NewsArticleModel[] | undefined>();

    useEffect(() => {
        const call = async () => {
            var response = api_call.then(x=>setArticles(x?.articles))
        }
        call();
    });

    return <React.Fragment>
            <h2 className='mt-2 mb-2 p-2 bg-warning text-center'>National News</h2>
            <div className='overflow-scrollable'>
                <div className="border border-light bg-info p-1 strong">
                    <marquee>{articles?.[0].title ?? '' + ' ▣ ' + articles?.[1].title ?? '' + ' ▣ ' + articles?.[2].title + ' - ' + articles?.[3].title + ' - ' + articles?.[4].title + ' - ' + articles?.[5].title + ' - ' + articles?.[6].title + ' - ' + articles?.[7].title + ' - ' + articles?.[8].title + ' - ' + articles?.[9].title + ' - ' + articles?.[10].title }</marquee>
                </div>
                    <hr />  
                    <div className='card'>
                        <div className='row p-3'>
                            <div className='col-8'>
                                <p id='news_title' className='text-center mark p-2'>{articles?.[0].title ?? 'Waiting..'}</p>
                                <hr />
                                <p id='news_description' className='small lead bg-light'> {articles?.[0].description ?? 'Waiting..'}</p>
                                <p id='news_content' className='small lead bg-light'> {articles?.[0].content ?? 'Waiting..'}<a className='text-decoration-none small' href={articles?.[0].url}> Read more</a></p>
                                <hr />
                                <p id='news_description' className='small lead bg-white float-end'><small> Published at: <strong>{articles?.[0].publishedAt?.replace('T', ' ').replace('Z','')}</strong></small></p>
                            </div>
                            <div className='col-4'>
                                <div className='row text-center bg-light p-2'>
                                    <img src={articles?.[0].image ?? '/images/news.png'} width={200} height={200} alt="headline image" />
                                </div>
                                <hr />
                                <div className='row no-gutters bg-light'>
                                    <div className='col-4'>
                                        <blockquote className='text-muted m-2'> Source </blockquote>
                                    </div>
                                    <div className='col'>
                                        <p className='bg-light strong m-2'> <a className='text-decoration-none' target='_blank' href={articles?.[0].source?.url}>{articles?.[0].source?.name }</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                <div className='text-center'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='card shadow p-2'>
                                <div className='row no-gutters'>
                                    <div className='col-4 text-center bg-light p-3'>
                                        <img className='' src={articles?.[1].image ?? '/images/news.png'} width={90} height={80} alt='news 1 logo' />
                                    </div>
                                    <div className='col p-2'>
                                        <div className='row'>
                                            <p className='mark'>{articles?.[1].title} </p>
                                        </div>
                                        <div className='row bg-light'>
                                            <p className='mb-2'>{articles?.[1].description} <a target='_blank' href={articles?.[1].url}> read more</a> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                        <div className='card shadow'>
                                <div className='row no-gutters'>
                                    <div className='col-3 text-center bg-light mx-3'>
                                        <img className='p-2' src={articles?.[2].image ?? '/images/news.png'} width={80} height={80} alt='news 1 logo' />
                                    </div>
                                    <div className='col'>
                                        <div className='row mx-2'>
                                            <p className='mark'>{articles?.[2].title}</p>
                                        </div>
                                        <div className='row bg-light mx-2'>
                                            <p>{articles?.[1].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='card shadow'>
                                <div className='row no-gutters'>
                                    <div className='col-3 text-center bg-light mx-3'>
                                        <Image className='p-2' src='/images/news.png' width={80} height={80} alt='news 1 logo' />
                                    </div>
                                    <div className='col'>
                                        <div className='row mx-2'>
                                            <p className='mark'>{articles?.[2].title}</p>
                                        </div>
                                        <div className='row bg-light mx-2'>
                                            <p>{articles?.[2].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <Link className='btn btn-primary align-right text-decoration-none' href='/news/national/List'>See All</Link>
                    <hr />
                </div>
            </div>
    </React.Fragment>;
}

export default NationalComponent;