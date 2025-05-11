import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
