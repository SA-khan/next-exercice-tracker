import { ActivityTypeEnum } from "@/enums/ActivityTypeEnum";
import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'

class ExerciseTaskModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public exerciseTrackerId?: number,
        public title?: string,
        public description?: string,
        public activityType?: ActivityTypeEnum,
        public duration?: string,
        public date?: string
    ) { 
        super();
    }
}

export default ExerciseTaskModel;