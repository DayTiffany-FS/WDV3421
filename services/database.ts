export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

let tasks: Task[] = [];

const databaseService = {
  async getAllTasks(): Promise<Task[]> {
    return tasks;
  },

  async addTask(title: string) {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    tasks.push(newTask);
    return newTask;
  },

  async toggleTask(id: string) {
    tasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
  },

  async deleteTask(id: string) {
    tasks = tasks.filter(task => task.id !== id);
  },
};

export default databaseService;