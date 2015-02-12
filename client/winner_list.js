Template.winnerList.helpers({
    winners: function() {
        return Winner.findAll();
    }
});