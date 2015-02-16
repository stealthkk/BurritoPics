import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('pic', { path: '/pic/:id'});
    this.route('construction', { path: '/construction' });
    //this.route('accordion');
});

export default Router;
