import Component from '@ember/component';

export default Component.extend({
  tag: '',
  actions: {
    addCard() {
      const name = window.prompt('name for taks');
      console.log( 'add cand', name , this.get('group.name') );
      this.get('group.tasks').addObject({name})
    }
  }
});
