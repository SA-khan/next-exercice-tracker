import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";

export class UserAccessRightModel extends AuditableModel {
    constructor(
        public userAccessRightId?: number,
        public user?: UserModel
    ) {
        super();
    }
}