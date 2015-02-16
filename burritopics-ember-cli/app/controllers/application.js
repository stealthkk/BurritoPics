import Ember from 'ember';

export default Ember.Controller.extend({
	    _showOutletWithTransition: function() {
        Ember.$('img').fadeTo(2000, 1);
    },
  actions: {
    goToRoute: function(route) { 
		// Ember.$('.BurritoImage').hide();

		// Ember.$('.BurritoImage').each(function () {
		//     var numRand = slowimage.getRandRange(1000, 5500);
		//     Ember.$(this).show('blind', {
		//       easing: 'easeOutCirc',
		//       duration: numRand
		//     });

		    var that = this;
            Ember.$('img').fadeTo(2000, 0, function() {
                Ember.run(function() {
                    that.transitionToRoute(route);
                });                
                Ember.run.scheduleOnce('afterRender', that._showOutletWithTransition);
            });  
		}
    }
});
