import { Mixin } from 'ts-mixer';
import Mongoose, { Model } from 'mongoose'
import { AuditableModel } from './AuditableModel'
import { UserModel } from './UserModel';

export class TaskModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public taskId?: number,
        public title?: string,
        public description?: string,
        public isActive?: boolean,
        public creator?: UserModel
    ) {
        super();
    }
}