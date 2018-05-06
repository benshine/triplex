import Component from '@ember/component';

export default Component.extend({
  classNames: ['ma2', 'pa4', 'bg-moon-gray', 'br4', 'link', 'dim', 'hover-bg-light-blue'],
  classNameBindings: ['isActive:bg-light-purple'],
  isActive: false,
  click() {
    console.log( `click on ${this.get('movie.name')}`  );
    this.toggleProperty('isActive');
  }
});
