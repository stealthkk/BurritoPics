import Ember from "ember";

var PicRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
  },
  model: function(params) {
    var pic = this.store.find('burritopic', params.id);
    return pic;
  }
});

export default PicRoute;