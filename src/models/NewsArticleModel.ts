import { NewsSourceModel } from "./NewsSourceModel";

export class NewsArticleModel {
    constructor(
        public source?: NewsSourceModel,
        public author?: string,
        public title?: string,
        public description?: string,
        public url?: string,
        public urlToImage?: string,
        public publishedAt?: string,
        public content?: string
    ) {  }
}