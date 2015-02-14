import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    var pic = this.store.find('burritopic', params.id);
    return pic;
  }
});
