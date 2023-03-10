import { NewsModel } from '../models/NewsModel'

export class NewsService {
    constructor() {  }
    public async GetLatestNews(countryCode: string = 'us') : Promise<NewsModel> {
        var calling = await fetch("https://newsapi.org/v2/top-headlines?country="+countryCode+"&apiKey=eb8fa7de774946c6b8f0b552e3df1601")
                            .then(x=>x.json())
                            .catch((err)=>console.log(err));
        return calling;
    }
    public async GetGNews(category: string = 'nation', language: string = 'en', countryCode: string = 'pk') : Promise<NewsModel> {
        var calling = await fetch("https://gnews.io/api/v4/top-headlines?category="+category+"&lang="+language+"&country="+countryCode+"&apikey=8a178c9afbda1344cc70f116a9430b23")
                            .then(x=>x.json())
                            .catch((err)=>console.log(err));
        return calling;
    }
    public async GetTechnologyNews(countryCode: string = 'us') : Promise<NewsModel> {
        var calling = await fetch("https://newsapi.org/v2/top-headlines?country="+countryCode+"&category=technology&apiKey=eb8fa7de774946c6b8f0b552e3df1601")
                            .then(x=>x.json())
                            .catch((err)=>console.log(err));
        return calling;
    }
}