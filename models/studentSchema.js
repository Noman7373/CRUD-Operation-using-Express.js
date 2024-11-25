import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, validate: (v) => v >= 10 },
  fee: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5000,
  },
});

const studentModel = new mongoose.model("student", studentSchema);

export default studentModel;
