import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'
import { NewsTypeModel } from "./NewsTypeModel";
import { NewsTypeEnum } from "@/enums/NewsTypeEnum";
import { NewsArticleModel } from "./NewsArticleModel";

export class NewsModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public newsId?: number,
        public title?: string,
        public newsType?: NewsTypeEnum,
        public description?: string,
        public imageUrl?: string,
        public incidentDate?: string,
        public reportingDate?: string,
        public author?: string,
        public authorImageUrl?: string,
        public authorUrl?: string,
        public status?: string,
        public source?: string,
        public sourceUrl?: string,
        public sourcedate?: string,
        public totalResults?: string,
        public articles?: NewsArticleModel[],
        public user?: UserModel
    ) {
        super();
    }
}