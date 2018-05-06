import Component from '@ember/component';

export default Component.extend({
  tag: '',
  actions: {
    addCard(name) {
      console.log( 'add cand', name , this.get('group.name') );
    }
  }
});
