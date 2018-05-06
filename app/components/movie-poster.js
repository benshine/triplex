import Component from '@ember/component'

export default Component.extend({
  classNames: ['ma2', 'pa4', 'bg-moon-gray', 'br4', 'link', 'hover-bg-light-blue', 'hide-child'],
  classNameBindings: ['isActive:bg-light-purple'],
  isEditing: false,

  actions: {
    toggleEdit () {
      this.toggleProperty('isEditing');
    }
  }
})
