Template.ballotList.helpers({
    ballots: function() {
        return Ballot.find({}, {sort: {points: -1}})
    }
});

Template.person.helpers({
    elementID: function() {
        return this._id + "_id"
    },
    ballotKeys: function() {
        var keys = [];
        for (var key in this.first) {
            keys.push({
                _id: this._id,
                key: key
            });
        }

        return keys
    },
    categoryString: function() {
        return UI._globalHelpers.Schemas.AnswersScheme.label(this.key.toString())
    },
    categorySelectionFirstString: function() {
        var baloot = Ballot.findOne(this._id);
        var answer = baloot.first[this.key];

        var winner = Winner.findOne();
        var actualWinner = winner[this.key];

        var displayAnswer = answer.split(", ")[0].trim();

        if (actualWinner == answer) {
            displayAnswer += " <span class=\"glyphicon glyphicon-ok\" style=\"color:green\"></span>";
        }

        return displayAnswer;
    },
    categorySelectionSecondString: function() {
        var baloot = Ballot.findOne(this._id);
        var answer = baloot.second[this.key];

        var winner = Winner.findOne();
        var actualWinner = winner[this.key];

        var displayAnswer = answer.split(", ")[0].trim();

        if (actualWinner == answer) {
            displayAnswer += " <span class=\"glyphicon glyphicon-ok\" style=\"color:green\"></span>";
        }

        return displayAnswer;
    }
});

Template.person.rendered = function() {
    var divID = $("#" + this.data._id);
    var test = divID.html();
    $('.popover_link').popover({
        container: "body",
        html: true,
        trigger: "focus",
        content: function() {
            var divID = "#" + this.id.replace("_id", "");
            return $(divID).html();
        }
    });
};

Template.person.events({
    'click .list-group-item': function(e, t) {
        e.popover({

        }).popover('show');
    }
});