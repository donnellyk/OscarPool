Meteor.publish('ballot', function() {
    return Ballot.find();
});
Meteor.publish('winner', function() {
    return Winner.find();
});
