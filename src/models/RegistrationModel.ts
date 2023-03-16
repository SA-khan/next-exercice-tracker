import Mongoose from 'mongoose';
import { Mixin } from 'ts-mixer'
import  { AuditableModel }  from './AuditableModel';

class RegistrationModel extends Mixin(AuditableModel, Mongoose.Model)  {
    constructor(
        public registrationId?: number,
        public userName?: string,
        public emailAddess?: string,
        public passcode?: string
    ) { 
        super();
     }
}

export default RegistrationModel;