import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'

export class UserDemographicModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public userDemographicId?: number,
        public user?: UserModel
    ) {
        super();
    }
}