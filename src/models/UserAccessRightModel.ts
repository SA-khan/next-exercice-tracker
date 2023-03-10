import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'

export class UserAccessRightModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public userAccessRightId?: number,
        public code?: string,
        public user?: UserModel
    ) {
        super();
    }
}