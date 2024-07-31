import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IPatientInfo extends Document {
  name: string;
  email: string;
  contactNumber: number;
  age: number;
  weight: number;
  bloodPressure: number;
  stressLevel: number;
  glucose: number;
  exerciseFollowups: string[];
  dietFollowups: string[];
}

const PatientSchema: Schema<IPatientInfo> = new Schema<IPatientInfo>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  bloodPressure: {
    type: Number,
    required: true,
  },
  stressLevel: {
    type: Number,
    required: true,
  },
  glucose: {
    type: Number,
    required: true,
  },
  exerciseFollowups: {
    type: [String],
    required: true,
  },
  dietFollowups: {
    type: [String],
    required: true,
  },
});

export const PatientModel: Model<IPatientInfo> =
  mongoose.models.patients || model<IPatientInfo>("patients", PatientSchema);
