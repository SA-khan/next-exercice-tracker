import Mongoose from 'mongoose'
import MongoDb from 'mongodb'
import UserAccessRightSchema from '@/schemas/UserAccessRightSchema'
import { UserAccessRightModel } from '@/models/UserAccessRightModel'
import Envelop from '@/models/Envelop';

export class UserAccessRightService {

    public async GetAll() {
        var val = new UserAccessRightSchema();
        var response = new Envelop(true, 1000001, await val.find());
        console.log('Get All!');
        return response;
    }

    public async GetById(id: number) {
        var val = new UserAccessRightSchema();
        var response = new Envelop(true, 1000001, await val.find({ userAccessRightId: id }));
        console.log('Get By Id!');
        return response;
    }

    public async Save(userAccessRight: UserAccessRightModel) {
        var response = new Envelop();
        var val = new UserAccessRightSchema ({  });
        await val.Save();
        console.log('Saved!');
        return new Envelop ();
    }

    public async Remove(id: number) {
        var val = new UserAccessRightSchema();
        var val2 = await val.find(id);
        await val2.Remove(id);
        console.log('Removed!');
        return new Envelop ();
    }
}