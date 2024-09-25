import { Task } from '../models/taskModel';

export const getTasks = async () => Task.find();

export const addTask = async (taskData: any) => {
  const task = new Task(taskData);
  return await task.save();
};

export const updateTask = async (id: string, taskData: any) => {
  return Task.findByIdAndUpdate(id, taskData, { new: true });
};

export const deleteTask = async (id: string) => {
  return Task.findByIdAndDelete(id);
};
