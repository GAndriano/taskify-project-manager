// module for creating projects and an array for storing them
class Project {
  constructor(name, due, done) {
    this.name = name;
    this.due = due;
    this.tasks = [];
    this.done = done;
  }

  deleteTask = (newTask) => this.tasks.splice((this.tasks.indexOf(newTask)), 1);

  addTask = (newTask) => this.tasks.push(newTask);
}

const projectList = [];

export { projectList, Project };
