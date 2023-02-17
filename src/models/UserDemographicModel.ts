import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";

export class UserDemographicModel extends AuditableModel {
    constructor(
        public userDemographicId?: number,
        public user?: UserModel
    ) {
        super();
    }
}