Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return [Meteor.subscribe('ballot'), Meteor.subscribe('winner')]; }
});

Router.route('/', {name: 'ballotList'});
Router.route('/ballot/:_id', {
    name: 'ballotEdit',
    data: function() { return Ballot.findOne(this.params._id); }
});

Router.route('/ballot', {name: 'ballotNew'});
Router.route('/supersecretcontrolpanel', {name: 'control'});