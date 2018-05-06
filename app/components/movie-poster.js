import Component from '@ember/component'

export default Component.extend({
  classNames: ['ma2', 'pa4', 'bg-moon-gray', 'br4', 'link', 'hover-bg-light-blue'],
  classNameBindings: ['isActive:bg-light-purple'],
  isEditing: false,

  actions: {

    updateName (e) {
      console.log({e})
    },
    toggleEdit () {
      this.toggleProperty('isEditing');
    }
  }
})
