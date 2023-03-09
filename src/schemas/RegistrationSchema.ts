import RegistrationModel from "@/models/RegistrationModel";
import mongoose, { Schema } from "mongoose"

const RegistrationSchema = () => {
    return new Schema({
        'registrationId': Number,
        'userName': String,
        'emailAddress': String,
        'passcode': String,
    })
}

export default RegistrationSchema;