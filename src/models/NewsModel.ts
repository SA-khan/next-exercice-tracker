import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'

export class NewsModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public newsId?: number,
        public title?: string,
        public description?: string,
        public date?: string,
        public imageUrl?: string,
        public sourceUrl?: string,
        public user?: UserModel
    ) {
        super();
    }
}