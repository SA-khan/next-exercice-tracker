import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer';
import Mongoose from 'mongoose'

export class GeoCoordinateModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public geoCoordinateModelId?: number,
        public title?: string,
        public description?: string,
        public Longitude?: number,
        public Latitude?: number,
        public imageUrl?: string,
        public isActive?: boolean,
        public user?: UserModel
    ) {
        super();
    }
}