import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface IProduct extends mongoose.Document {
  name: string;
  description: string;
  price: number;
  stocks: number;
}

const productSchema = new Schema<IProduct>({
  name: String, // String is shorthand for {type: String}
  description: String,
  price: Number,
  stocks: Number
});

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;

