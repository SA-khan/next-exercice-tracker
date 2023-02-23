import { TaskModel } from '@/models/TaskModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'
import mongoose from 'mongoose'

// export const TaskSchema = Mongoose.model('mytask', new TaskModel());

// new Mongoose.Schema({})


const task = new mongoose.Schema({
    name1:{
        type:String
    }
    ,
    name2:{
        type:String
    }
})


export const TaskSchema = Mongoose.model('mytasssk', task);



// module.exports =  TaskSchema 