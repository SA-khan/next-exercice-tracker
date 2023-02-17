import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";

export class RatingModel extends AuditableModel {
    constructor(
        public ratingId?: number,
        public user?: UserModel
    ) {
        super();
    }
}