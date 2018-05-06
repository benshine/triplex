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

  buildGroups() {
    return this.get('groupNames').map(
      (n) => {
        return Ember.Object.create({
          name: n,
          tasks: ['funn', 'yummy'].map((t) =>
            ({
              name: `Do ${t} thing`
            })
          )
        });
      });
  },

  model() {
    this.set('groups',
      this.buildGroups()
    );
    this.set('tasks', this.buildTasks())
    return {
      // tasks:   this.get('tasks'),
      groups: this.get('groups')
    }

  }
});
