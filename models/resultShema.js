import mongoose from 'mongoose';
const { Schema } = mongoose;

/**result model */
const resultModel = new Schema({
  username: { type: String },
  questionGroup: { type: String },
  result: { type: Object, default: {} },
  points: { type: Number, default: 0 },
  questionCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Result', resultModel);
