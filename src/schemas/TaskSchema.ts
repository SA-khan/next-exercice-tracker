import { TaskModel } from '@/models/TaskModel'
import Mongodb from 'mongodb'
import mongoose from 'mongoose'

let TaskSchema;

try {
    TaskSchema = mongoose.model('task')
  } catch (error) {
    TaskSchema = mongoose.model('task', new TaskModel())
  }

export default TaskSchema;
