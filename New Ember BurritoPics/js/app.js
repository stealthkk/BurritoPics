App = Ember.Application.create({
  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true, // detailed logging of all routing steps
  rootElement: '#ember-app'
});

App.Router.map(function() {
  this.route('pic', { path: '/pic/:id'});
  this.route('construction', { path: '/construction' });
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
    simulateRemoteResponse: false,
    latency: 20
});

App.ApplicationStore = DS.Store.extend({
    adapter: App.ApplicationAdapter
});
