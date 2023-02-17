import { AuditableModel } from './AuditableModel'
import { UserModel } from './UserModel';

export class TaskModel extends AuditableModel {
    constructor(
        public taskId?: number,
        public title?: string,
        public description?: string,
        public isActive?: boolean,
        public creator?: UserModel
    ) {
        super();
    }
}