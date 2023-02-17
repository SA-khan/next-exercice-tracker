export abstract class AuditableModel {
    constructor(
        public createdBy?: string,
        public createdOn?: string,
        public modifiedBy?: string,
        public modifiedOn?: string,
        public version?: number,
        public isDeleted?: boolean
    ) {}
}