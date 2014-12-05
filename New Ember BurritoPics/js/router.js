App.BurritopicsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('burritopic');
  }
});
