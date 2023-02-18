import { UserModel } from '@/models/UserModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'

export default Mongoose.model('user', new UserModel());