import mongoose, { Schema } from "mongoose";

const stockSchema = new Schema(
	{
		Symbol: { type: String, required: true }
	},
	{
		timestamps: true,
	}
);

const Stock = mongoose.models.Stock || mongoose.model("Stock", stockSchema, "Stocks");
export default Stock;