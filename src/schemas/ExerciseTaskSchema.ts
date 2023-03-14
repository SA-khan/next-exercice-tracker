import ExerciseTaskModel from '@/models/ExerciseTaskModel';
import Mongoose from 'mongoose';

export default Mongoose.models.ExerciseTask || Mongoose.model('ExerciseTask', new ExerciseTaskModel());