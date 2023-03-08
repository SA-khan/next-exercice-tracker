import { NewsModel } from '../models/NewsModel'

export class NewsService {
    constructor() {  }
    public async GetLatestNews(countryCode: string = 'us') : Promise<NewsModel> {
        var calling = await fetch("https://newsapi.org/v2/top-headlines?country="+countryCode+"&apiKey=eb8fa7de774946c6b8f0b552e3df1601")
                            .then(x=>x.json());
        return calling;
    }
}