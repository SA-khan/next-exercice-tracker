import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer';
import Mongoose from 'mongoose'
import { GeoCoordinateModel } from "./GeoCoordinateModel";

export class RegionModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public regionModelId?: number,
        public code?: string,
        public name?: string,
        public description?: string,
        public imageUrl?: string,
        public geo?: GeoCoordinateModel,
        public isActive?: boolean
    ) {
        super();
    }
}