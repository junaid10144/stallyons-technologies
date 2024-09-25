import { Request, Response, NextFunction } from 'express';
import * as taskService from '../services/taskService';
import { taskValidationSchema } from '../validations/taskValidation';

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newTask = await taskService.addTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
