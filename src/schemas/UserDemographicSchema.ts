import { UserDemographicModel } from '@/models/UserDemographicModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'

export default Mongoose.model('userDemographic', new UserDemographicModel());