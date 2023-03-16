import RegistrationModel from "@/models/RegistrationModel";
import Mongoose, { Schema } from "mongoose"

const RegistrationSchema = new Schema ({
        'registrationId': Number,
        'userName': String,
        'emailAddress': String,
        'passcode': String,

});

export default Mongoose.models.Registration || Mongoose.model('Registration', RegistrationSchema);