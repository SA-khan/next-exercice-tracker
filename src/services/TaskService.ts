// import * as express from 'express';
import mongoose from 'mongoose'
// const mongoose = require("mongoose")
// import MongoDb from 'mongodb'
// import   {TaskSchema}   from '../schemas/TaskSchema'
// import { TaskModel } from '@/models/TaskModel'
// import { Envelop } from '@/models/Envelop';
import {dbUrl} from '../config/Keys';

export class TaskService {

    public async GetAll() {
     mongoose.connect(dbUrl).then(()=>{console.log("Connected")}).catch(()=>{console.log("Not Connected")});
    //  const user = mongoose.model("tas", new mongoose.Schema({
    //         name1:{
    //             type:String
    //         }
    //         ,
    //         name2:{
    //             type:String
    //         }
    //     }))
        
        
        // .then(()=>{console.log("Connected")}).catch(()=>{console.log("Not Connected")});
        
        
        // var response = new Envelop(true, 1000001, TaskSchema.find());
        console.log('Get All!');
        return "response";
    }

    // public async GetById(id: number) {
    //     var val = new TaskSchema;
    //     var response = new Envelop(true, 1000001, await val.find({ taskId: id }));
    //     console.log('Get By Id!');
    //     return response;
    // }

    // public async Save(task: TaskModel) {
    //     var response = new Envelop();
    //     var val = new TaskSchema ({ title: task.title, description: task.description });
    //     await val.Save();
    //     console.log('Saved!');
    //     return new Envelop ();
    // }

    // public async Remove(id: number) {
    //     var val = new TaskSchema();
    //     var val2 = await val.find(id);
    //     await val2.Remove(id);
    //     console.log('Removed!');
    //     return new Envelop ();
    // }
}