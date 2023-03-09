import { RatingModel } from '@/models/RatingModel'
import Mongodb from 'mongodb'
import mongoose from 'mongoose';

export default mongoose.models.rating || mongoose.model('rating', new RatingModel());