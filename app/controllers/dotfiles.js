import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onSuccess(e) {
      console.log( 'onSuccess', e  );
    },
    onError(e) {
      console.log( 'onError', e  );
    }
  }
});
