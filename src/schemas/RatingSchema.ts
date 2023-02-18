import { RatingModel } from '@/models/RatingModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'

export default Mongoose.model('rating', new RatingModel());