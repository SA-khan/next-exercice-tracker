import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer';
import Mongoose from 'mongoose'

export class CurrencyModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public CurrencyModelId?: number,
        public code?: string,
        public name?: string,
        public symbol?: string,
        public description?: string,
        public imageUrl?: string,
        public isActive?: boolean,
        public user?: UserModel
    ) {
        super();
    }
}