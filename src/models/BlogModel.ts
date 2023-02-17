import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";

export class BlogModel extends AuditableModel {
    constructor(
        public blogId?: number,
        public title?: string,
        public description?: string,
        public comments?: Comment[],
        public isActive?: boolean,
        public blogger?: UserModel
    ) {
        super();
    }
}