import { Schema, model } from 'mongoose';

interface ITask {
  title: string;
  description: string;
  completed: boolean;
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Task = model<ITask>('Task', taskSchema);
