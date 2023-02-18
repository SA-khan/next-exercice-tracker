import { UserAccessRightModel } from '@/models/UserAccessRightModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'

export default Mongoose.model('userAccessRight', new UserAccessRightModel());