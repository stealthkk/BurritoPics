import Ember from "ember";
import DS from "ember-data";

var ApplicationAdapter = DS.FixtureAdapter.extend({
    simulateRemoteResponse: false,
    latency: 20
});

export default ApplicationAdapter;
