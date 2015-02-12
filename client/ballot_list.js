Template.ballotList.helpers({
    ballots: function() {
        return Ballot.find({}, {sort: {points: -1}})
    }
});