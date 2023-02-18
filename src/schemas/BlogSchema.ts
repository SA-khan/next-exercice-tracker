import { BlogModel } from '@/models/BlogModel'
import  Mongoose  from 'mongoose'
import Mongodb from 'mongodb'

export default Mongoose.model('blog', new BlogModel());