import RegistrationModel from '@/models/RegistrationModel'
import ExerciseTaskModel from '@/models/ExerciseTaskModel'
import Envelop from '@/models/Envelop'
import mongoose from 'mongoose'
import { dbUrl } from '@/config/Keys';
import RegistrationSchema from '@/schemas/RegistrationSchema';


export class ExerciseTrackerService {
    constructor() {

    }

    public async Registration(model: RegistrationModel) : Promise<Envelop> {
        await mongoose.connect(dbUrl).then(()=>{console.log("Connected")}).catch(()=>{console.log("Not Connected")});
        var response = RegistrationSchema;
        var query = response
        return new Envelop( true, 1000001, model);
    }

}