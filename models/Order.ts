// models/Order.ts
import mongoose, { Document, Schema } from "mongoose";

interface IOrderDetails {
  size: string;
  color: string;
  quantity: number;
  imageURL: string;
}

interface IOrder extends Document {
  productType: string;
  details: IOrderDetails;
  createdAt: Date;
}

const OrderSchema: Schema = new Schema({
  productType: { type: String, required: true },
  details: {
    size: { type: String, required: true },
    color: { type: String, required: true },
    quantity: { type: Number, required: true },
    imageURL: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);
