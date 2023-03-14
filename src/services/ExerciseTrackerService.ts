import RegistrationModel from '@/models/RegistrationModel'
import ExerciseTaskModel from '@/models/ExerciseTaskModel'
import LoginModel from '@/models/LoginModel'
import Envelop from '@/models/Envelop'
import Mongoose from 'mongoose'
import { dbUrl } from '@/config/Keys';
import RegistrationSchema from '@/schemas/RegistrationSchema';
import ExerciseTaskSchema from '@/schemas/ExerciseTaskSchema'
import { Connect } from 'react-redux';


export class ExerciseTrackerService {
    constructor() {

    }

    public async Registration(model: RegistrationModel) : Promise<Envelop> {
        await this.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log("Connected")}).catch(()=>{console.log("Not Connected")});
        var response = RegistrationSchema.create(model);
        var query = response;
        return new Envelop( true, 1000001, model);
    }

    public async Login(model: LoginModel) : Promise<Envelop> {
        await this.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log("Connected")}).catch(()=>{console.log("Not Connected")});
        var response = RegistrationSchema.find(model);
        var query = response;
        return new Envelop( true, 1000001, model);
    }

    public async CreateActivity(model: ExerciseTaskModel) : Promise<Envelop> {
        var response = new Envelop(false, 100001, null);
        await this.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(()=>{
                console.log("Connected");
                response.content = ExerciseTaskSchema.create(model);
                if(response.content) {
                    response.isSuccessful = true;
                    console.log(response.content);
                }
                else { }
            })
            .catch((err)=>{
                console.log("Service Not Connected: /nReason: " + err)
            })
            .finally(()=>{
                return new Envelop( true, 1000001, response);
            });
    }

    public async GetAll() : Promise<Envelop> {
        var response = new Envelop(false, 100001, null);
        await this.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(()=>{
                console.log("Connected");
                response.content = ExerciseTaskSchema.find();
                if(response.content) {
                    response.isSuccessful = true;
                    console.log(response.content);
                }
                else { }
            })
            .catch((err)=>{
                console.log("Service Not Connected: /nReason: " + err)
            })
            .finally(()=>{
                return response;
            });
    }

    public connect = async (url: string, connectOptions: object) => {
        return await Mongoose.connect(url, connectOptions);
    }

}