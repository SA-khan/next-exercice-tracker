import { AuditableModel } from "./AuditableModel";
import { UserModel } from "./UserModel";

export class CommentModel extends AuditableModel {
    constructor(
        public commentId?: number,
        public title?: string,
        public user?: UserModel
    ) {
        super();
    }
}