import Component from '@ember/component';

export default Component.extend({
  click(e) {
    console.log( 'click', e  );
    this.get('onAddCard')();
  }
});
