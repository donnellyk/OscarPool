Template.control.helpers({
    winnerDoc: function() {
        return Winner.findOne();
    }
});

AutoForm.hooks({
    controlForm: {
        after: {
            update: function(docId, modifier, template) {
                Meteor.call("winnerUpdate");
            }
        }
    }
});