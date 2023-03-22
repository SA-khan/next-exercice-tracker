import Mongoose from 'mongoose'
import MongoDb from 'mongodb'
import UserDemographicSchema from '@/schemas/UserDemographicSchema'
import { UserDemographicModel } from '@/models/UserDemographicModel'
import Envelop from '@/models/Envelop';

export class UserDemographicService {

    public async GetAll() {
        var val = new UserDemographicSchema();
        var response = new Envelop(true, 1000001, await val.find());
        console.log('Get All!');
        return response;
    }

    public async GetById(id: number) {
        var val = new UserDemographicSchema();
        var response = new Envelop(true, 1000001, await val.find({ userDemographicId: id }));
        console.log('Get By Id!');
        return response;
    }

    public async Save(UserDemographic: UserDemographicModel) {
        var response = new Envelop();
        var val = new UserDemographicSchema ({  });
        await val.Save();
        console.log('Saved!');
        return new Envelop ();
    }

    public async Remove(id: number) {
        var val = new UserDemographicSchema();
        var val2 = await val.find(id);
        await val2.Remove(id);
        console.log('Removed!');
        return new Envelop ();
    }
}