export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

let tasks: Task[] = [];

const databaseService = {
  init: async () => {
    // For in-memory DB, nothing to initialize
    return Promise.resolve();
  },

  getAllTasks: async (): Promise<Task[]> => {
    return tasks;
  },

  addTask: async (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    tasks.push(newTask);
    return newTask;
  },

  toggleTask: async (id: string) => {
    tasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
  },

  deleteTask: async (id: string) => {
    tasks = tasks.filter(task => task.id !== id);
  },
};

export default databaseService;