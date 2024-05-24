import mongoose, { Schema } from "mongoose";

const resultSchema = new Schema(
	{
        id: { type: String, required: true },
		result: { type: String, required: true }
	},
	{
		timestamps: true,
	}
);

const Result = mongoose.models.Result || mongoose.model("Result", resultSchema, "results");
export default Result;