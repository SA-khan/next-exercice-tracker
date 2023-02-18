import { UserTypeEnum } from "@/enums/UserTypeEnum";
import { AuditableModel } from "./AuditableModel";
import { RatingModel } from "./RatingModel";
import { UserAccessRightModel } from "./UserAccessRightModel";
import { UserDemographicModel } from "./UserDemographicModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'

export class UserModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public userId?: number,
        public code?: string,
        public username?: string,
        public passphrase?: string,
        public emailAddress?: string,
        public type?: UserTypeEnum,
        public rating?: RatingModel[],
        public userDemographic?: UserDemographicModel,
        public accessRights ?: UserAccessRightModel[]
    ) {
        super();
    }
}