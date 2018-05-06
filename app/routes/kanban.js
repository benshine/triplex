import Route from '@ember/routing/route';

export default Route.extend({

  groupNames: ['A', 'B', 'C', 'D'],
  buildTasks() {
    let tasks = [];
    for (let i = 0; i < 100; i++) {
      tasks.push({name: "Task " + i});
    }
    return tasks;
  },

  model() {
    this.set('groups', this.get('groupNames').map(
      (n) => {
        return Ember.Object.create({
          name: n,
          tasks: []
        });
      }

    ));
    this.set('tasks', this.buildTasks())
    return {
      tasks:   this.get('tasks'),
      groups: this.get('groups')
    }

  }
});
