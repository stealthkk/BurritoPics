App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('burritopics', { path: '/' });
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
    simulateRemoteResponse: false,
    latency: 20
});

App.ApplicationStore = DS.Store.extend({
    adapter: App.ApplicationAdapter
});