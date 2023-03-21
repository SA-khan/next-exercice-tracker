import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { NewsArticleModel } from '@/models/NewsArticleModel';
import { NewsService } from '@/services/NewsService';
let api_call = (new NewsService()).GetLatestNews();

const Index = () => {

    var news: NewsArticleModel[] = [] as NewsArticleModel[];
    const[articles, setArticles] = useState<NewsArticleModel[] | undefined>()

    useEffect(()=> {
        const call = async () => {
            var response = await api_call.then(x=>setArticles(x.articles))
        }
        call();
    });

    return <React.Fragment>
        <div>
        {
            articles?.map(article=>( 
                <div key={article.title} className='card shadow mt-2 mb-2 p-4'>
                    <div className='row card-title'>
                        <div className='col-3 text-center bg-light'>
                            <img className='w-100 h-100 bacground-position-cover' width={140} height={140} src={article.urlToImage ?? "/images/news.png"} alt="news image" />
                        </div>
                        <div className='col-7 bg-light'>
                            <div className='row'>
                                <div className='col'>
                                    <p className='text-muted'> 
                                    <div className='w-100 align-right'><mark className=''>{article.title ?? 'Demo Article Title'}</mark>
                                        
                                    </div>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                </div>
                            </div>  
                            <div className='row'>
                                <div className='col'>
                                    <blockquote className="blockquote">
                                        <p className="mb-3 text-danger text-muted lead"><small>{article.description ?? 'Demo News Description'}</small></p>
                                        <footer className="blockquote-footer bg-light"><small>Source: <kbd>{article.source?.name}</kbd> - <span className=''> Published Date:  <kbd>{article.publishedAt?.replace('T', ' ').replace('Z', ' ')}</kbd></span></small></footer>
                                    </blockquote>
                                </div>
                            </div>  
                        </div>
                        <div className='col bg-light text-center'>
                            <button className='btn btn-sm btn-danger mt-2'>Add to Favourites</button>
                            <a className='btn btn-sm btn-primary mt-2 align-bottom' target='_blank' rel="noreferrer" href={article.url}><span className='float-right'>Read More</span></a>
                            <div className='badge badge-pill border border-dark text-dark w-100 mt-2 p-2'>Views : 1</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </React.Fragment>;
}

export default Index;