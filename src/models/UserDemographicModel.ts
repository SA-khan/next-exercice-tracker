import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer'
import Mongoose from 'mongoose'
import { GeoCoordinateModel } from "./GeoCoordinateModel";

export class UserDemographicModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public userDemographicId?: number,
        public cnic?: string,
        public cnicIssuanceDate?: string,
        public cnicExpiryDate?: string,
        public addressResidential?: string,
        public geoResidential?: GeoCoordinateModel,
        public addressOfficial?: string,
        public geoOfficial?: GeoCoordinateModel,
        public geoCurrentLocation?: GeoCoordinateModel,
    ) {
        super();
    }
}