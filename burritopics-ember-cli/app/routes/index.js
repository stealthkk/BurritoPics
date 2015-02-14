import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    var pics = this.store.find('burritopic');
    return pics;
  }
});
