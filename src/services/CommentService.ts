import Mongoose from 'mongoose'
import MongoDb from 'mongodb'
import CommentSchema from '@/schemas/CommentSchema'
import { CommentModel } from '@/models/CommentModel'
import Envelop from '@/models/Envelop';

export class CommentService {

    public async GetAll() {
        var val = new CommentSchema();
        var response = new Envelop(true, 1000001, await val.find());
        console.log('Get All!');
        return response;
    }

    public async GetById(id: number) {
        var val = new CommentSchema();
        var response = new Envelop(true, 1000001, await val.find({ taskId: id }));
        console.log('Get By Id!');
        return response;
    }

    public async Save(comment: CommentModel) {
        var response = new Envelop();
        var val = new CommentSchema ({ title: comment.title });
        await val.Save();
        console.log('Saved!');
        return new Envelop ();
    }

    public async Remove(id: number) {
        var val = new CommentSchema();
        var val2 = await val.find(id);
        await val2.Remove(id);
        console.log('Removed!');
        return new Envelop ();
    }
}