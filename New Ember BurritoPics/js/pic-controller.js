App.PicController = Ember.Controller.extend({
  actions: {
    goToIndex: function() {
      this.transitionTo('index');
      return false;
    }
  }
});
