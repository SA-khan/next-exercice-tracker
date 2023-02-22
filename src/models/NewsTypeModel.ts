import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'

export class NewsTypeModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public newsTypeId?: number,
        public title?: string,
        public description?: string,
        public imageUrl?: string,
        public user?: UserModel
    ) {
        super();
    }
}