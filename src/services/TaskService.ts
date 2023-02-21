import * as express from 'express';
import Mongoose from 'mongoose'
import MongoDb from 'mongodb'
import  { TaskSchema }  from '../schemas/TaskSchema'
import { TaskModel } from '@/models/TaskModel'
import { Envelop } from '@/models/Envelop';
import { dbUrl } from '../config/Keys';

export class TaskService {

    public async GetAll() {
        var db = Mongoose.connect(dbUrl);
        var val = new TaskSchema;
        var response = new Envelop(true, 1000001, val.find());
        console.log('Get All!');
        return response;
    }

    public async GetById(id: number) {
        var val = new TaskSchema();
        var response = new Envelop(true, 1000001, await val.find({ taskId: id }));
        console.log('Get By Id!');
        return response;
    }

    public async Save(task: TaskModel) {
        var response = new Envelop();
        var val = new TaskSchema ({ title: task.title, description: task.description });
        await val.Save();
        console.log('Saved!');
        return new Envelop ();
    }

    public async Remove(id: number) {
        var val = new TaskSchema();
        var val2 = await val.find(id);
        await val2.Remove(id);
        console.log('Removed!');
        return new Envelop ();
    }
}