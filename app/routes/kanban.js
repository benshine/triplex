import Route from '@ember/routing/route';

export default Route.extend({
  buildTasks() {
    let tasks = [];
    for (let i = 0; i < 100; i++) {
      tasks.push({name: "Task " + i});
    }
    return tasks;
  },

  model() {
    this.set('tasks', this.buildTasks())
    return this.get('tasks');
  }
});
