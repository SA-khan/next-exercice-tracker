import Mongoose from 'mongoose'
import MongoDb from 'mongodb'
import RatingSchema from '@/schemas/RatingSchema'
import { RatingModel } from '@/models/RatingModel'
import Envelop from '@/models/Envelop';

export class RatingService {

    public async GetAll() {
        var val = new RatingSchema();
        var response = new Envelop(true, 1000001, await val.find());
        console.log('Get All!');
        return response;
    }

    public async GetById(id: number) {
        var val = new RatingSchema();
        var response = new Envelop(true, 1000001, await val.find({ retingId: id }));
        console.log('Get By Id!');
        return response;
    }

    public async Save(rating: RatingModel) {
        var response = new Envelop();
        var val = new RatingSchema ({  });
        await val.Save();
        console.log('Saved!');
        return new Envelop ();
    }

    public async Remove(id: number) {
        var val = new RatingSchema();
        var val2 = await val.find(id);
        await val2.Remove(id);
        console.log('Removed!');
        return new Envelop ();
    }
}