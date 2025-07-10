import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isRecorded: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

todoSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// If we have a model named Todo, use it. Otherwise, create a model named Todo
// Because next js use edge functions (New server every request)
export default  mongoose.model.Todo ||mongoose.model("Todo", todoSchema);