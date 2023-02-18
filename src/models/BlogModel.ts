import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer';
import Mongoose from 'mongoose'

export class BlogModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public blogId?: number,
        public title?: string,
        public description?: string,
        public comments?: Comment[],
        public isActive?: boolean,
        public blogger?: UserModel
    ) {
        super();
    }
}