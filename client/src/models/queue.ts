import mongoose, { Schema } from "mongoose";

const queueSchema = new Schema(
	{
        id: {type: String, required: true},
		data: { type: Buffer, required: true }
	},
	{
		timestamps: true,
	}
);

const Queue = mongoose.models.Queue || mongoose.model("Queue", queueSchema, "queues");
export default Queue;