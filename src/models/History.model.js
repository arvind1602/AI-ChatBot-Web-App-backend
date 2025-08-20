import mongoose, { Schema } from "mongoose";

const historyschema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chat: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const History = mongoose.model("History", historyschema);
export default History;
