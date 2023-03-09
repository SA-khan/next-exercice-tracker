import { TaskModel } from '@/models/TaskModel'
import Mongodb from 'mongodb'
import mongoose from 'mongoose'

export const TaskSchema = mongoose.models?.task || mongoose.model('task', new TaskModel())

