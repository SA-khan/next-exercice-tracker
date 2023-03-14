import Mongoose from 'mongoose';

class RegistrationModel  {
    constructor(
        public registrationId?: number,
        public userName?: string,
        public emailAddess?: string,
        public passcode?: string
    ) { 
       // super();
     }
}

export default RegistrationModel;