import Ember from "ember";

var IndexRoute = Ember.Route.extend({
  model: function() {
    var pics = this.store.find('burritopic');
    return pics;
  }
});

export default IndexRoute;
