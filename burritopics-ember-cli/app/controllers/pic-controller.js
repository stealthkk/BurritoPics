import Ember from "ember";

var PicController = Ember.ObjectController.extend({
  actions: {
    goToIndex: function() {
      this.transitionTo('index');
      return false;
    }
  }
});

export default PicController;