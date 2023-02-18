import { TaskModel } from '@/models/TaskModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'

export default Mongoose.model('task', new TaskModel());