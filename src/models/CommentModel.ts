import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'

export class CommentModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public commentId?: number,
        public title?: string,
        public user?: UserModel
    ) {
        super();
    }
}