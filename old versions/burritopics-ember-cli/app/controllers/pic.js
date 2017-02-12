import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        goToIndex: function() {
          this.transitionToRoute('index');
          return false;
        }
      }
});
