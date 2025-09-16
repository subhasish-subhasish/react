import mongoose, { Document, Model } from "mongoose";

export interface IForm extends Document {
  name: string;
  email: string;
  message: string;
}

const FormSchema = new mongoose.Schema<IForm>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
});

// Prevent recompiling model during HMR
const Form: Model<IForm> =
  mongoose.models.Form || mongoose.model<IForm>("Form", FormSchema);

export default Form;
