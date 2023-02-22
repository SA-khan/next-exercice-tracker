import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import { Mixin } from 'ts-mixer';
import Mongoose from 'mongoose'
import { FlagModel } from "./FlagModel";
import { RegionModel } from "./RegionModel";
import { CurrencyModel } from "./CurrencyModel";
import { GeoCoordinateModel } from "./GeoCoordinateModel";

export class CountryModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public countryModelId?: number,
        public code?: string,
        public name?: string,
        public description?: string,
        public symbol?: string,
        public imageUrl?: string,
        public geo?: GeoCoordinateModel,
        public flag?: FlagModel,
        public region?: RegionModel,
        public currency?: CurrencyModel,
        public inflationRate?: number,
        public population?: number,
        public isActive?: boolean,
        public user?: UserModel
    ) {
        super();
    }
}