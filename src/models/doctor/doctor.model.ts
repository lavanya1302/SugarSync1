import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IDoctorInfo extends Document {
  name: string;
  email: string;
  salt: string;
  password: string;
  contactNumber: number;
  educationLevel: string;
  hospitalName: string;
  expertises: string;
  experience: string;
  patients: Schema.Types.ObjectId[];
}

const DoctorSchema: Schema<IDoctorInfo> = new Schema<IDoctorInfo>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  educationLevel: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  expertises: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "patients",
    },
  ],
});

export const DoctorModel: Model<IDoctorInfo> =
  mongoose.models.doctors || model<IDoctorInfo>("doctors", DoctorSchema);
