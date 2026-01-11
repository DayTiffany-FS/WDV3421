import { Task } from './database';

let tasks: Task[] = [];

const databaseService = {
  init: async () => {
    console.log('Web database initialized (in-memory)');
  },

  getAllTasks: async (): Promise<Task[]> => {
    return tasks;
  },

  createTask: async (taskData: Omit<Task, 'id'>): Promise<Task> => {
    const newTask: Task = { id: Date.now(), ...taskData };
    tasks.push(newTask);
    return newTask;
  },

  updateTask: async (id: number, updates: Partial<Omit<Task, 'id'>>) => {
    tasks = tasks.map(t => (t.id === id ? { ...t, ...updates } : t));
    return tasks.find(t => t.id === id) || null;
  },

  deleteTask: async (id: number) => {
    tasks = tasks.filter(t => t.id !== id);
    return true;
  },
};

export default databaseService;