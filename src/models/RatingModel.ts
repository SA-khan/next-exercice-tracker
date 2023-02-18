import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";
import Mongoose from "mongoose"
import { Mixin }  from "ts-mixer"

export class RatingModel extends Mixin(AuditableModel, Mongoose.Schema) {
    constructor(
        public ratingId?: number,
        public user?: UserModel
    ) {
        super();
    }
}