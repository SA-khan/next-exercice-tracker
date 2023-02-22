import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer';
import Mongoose from 'mongoose'

export class FlagModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public flagModelId?: number,
        public name?: string,
        public description?: string,
        public imageUrl?: string,
        public isActive?: boolean,
        public user?: UserModel
    ) {
        super();
    }
}