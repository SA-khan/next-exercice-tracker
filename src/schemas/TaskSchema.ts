import { TaskModel } from '@/models/TaskModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'

export const TaskSchema = Mongoose.model('task', new TaskModel());

module.exports =  TaskSchema 