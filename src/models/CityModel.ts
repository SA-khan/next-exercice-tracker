import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer';
import Mongoose from 'mongoose'
import { CountryModel } from "./CountryModel";
import { GeoCoordinateModel } from "./GeoCoordinateModel";

export class CityModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public cityModelId?: number,
        public code?: string,
        public name?: string,
        public title?: string,
        public symbol?: string,
        public geo?: GeoCoordinateModel,
        public description?: string,
        public countryId?: CountryModel,
        public isActive?: boolean,
        public user?: UserModel
    ) {
        super();
    }
}