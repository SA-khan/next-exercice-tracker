import { CommentModel } from '@/models/CommentModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'

export default Mongoose.model('comment', new CommentModel());