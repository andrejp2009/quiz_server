import mongoose from 'mongoose';
const { Schema } = mongoose;

/**questions model */
const questionsModel = new Schema({
  questionGroup: { type: String },
  questions: { type: Array, default: [] },
  answers: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Questions', questionsModel);
