App.IndexRoute = Ember.Route.extend({
  model: function() {
    var pics = this.store.find('burritopic');
    return pics;
  }
});

App.PicRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
  },
  model: function(params) {
    var pic = this.store.find('burritopic', params.id);
    return pic;
  }
});

App.IndexController = Ember.Controller.extend({

});

App.PicController = Ember.Controller.extend({
  actions: {
    goToIndex: function() {
      this.transitionTo('index');
      return false;
    }
  }
});
