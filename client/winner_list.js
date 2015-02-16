Template.winnerList.helpers({
    winner: function() {
        return Winner.findAll();
    },
    winnerKeys: function() {
        var winner = Winner.findOne();
        var winnerKeys = [];

        for (var key in winner) {
            if (key != "_id") {
                winnerKeys.push(key);
            }
        }

        return winnerKeys;
    }
});

Template.award.helpers({
    categoryString: function() {
        return UI._globalHelpers.Schemas.AnswersScheme.label(this.toString())
    },
    categoryWinnerString: function() {
        var winner = Winner.findOne();
        return winner[this.toString()];
    }
});