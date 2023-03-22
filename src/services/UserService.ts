import Mongoose from 'mongoose'
import MongoDb from 'mongodb'
import UserSchema from '@/schemas/UserSchema'
import { UserModel } from '@/models/UserModel'
import Envelop from '@/models/Envelop';

export class TaskService {

    public async GetAll() {
        var val = new UserSchema();
        var response = new Envelop(true, 1000001, await val.find());
        console.log('Get All!');
        return response;
    }

    public async GetById(id: number) {
        var val = new UserSchema();
        var response = new Envelop(true, 1000001, await val.find({ taskId: id }));
        console.log('Get By Id!');
        return response;
    }

    public async Save(user: UserModel) {
        var response = new Envelop();
        var val = new UserSchema ({ username: user.username });
        await val.Save();
        console.log('Saved!');
        return new Envelop ();
    }

    public async Remove(id: number) {
        var val = new UserSchema();
        var val2 = await val.find(id);
        await val2.Remove(id);
        console.log('Removed!');
        return new Envelop ();
    }
}