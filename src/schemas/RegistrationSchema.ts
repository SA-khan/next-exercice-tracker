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

if(mongoose.models.ExerciseRegistration === undefined) { mongoose.model('ExerciseRegistration', RegistrationSchema()) } 

export default mongoose.models.ExerciseRegistration ;