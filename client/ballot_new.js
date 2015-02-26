SimpleSchema.debug = true;

Template.ballotNew.helpers({
    secondTag: function() {
        return this.replace("first", "second")
    },
    labelFromThis: function() {
        return UI._globalHelpers.Schemas.AnswersScheme.label(this.replace("first.", ""))
    }
});

Template.ballotEdit.helpers({
    secondTag: function() {
        return this.replace("first", "second")
    },
    labelFromThis: function() {
        return UI._globalHelpers.Schemas.AnswersScheme.label(this.replace("first.", ""))
    },
    idFromThis: function() {
        return this + "_id"
    },
    currentBallot: function() {
        return Ballot.findOne(this._id)
    }
});

AutoForm.hooks({
    newForm: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            if (!insertDoc.name) {
                this.done({nameError: true});
            } else {
                Meteor.call('ballotInsert', insertDoc, function(error, result) {
                    if (error) {
                        alert(error.reason);
                    } else {
                        Router.go('ballotEdit', {_id: result._id});
                    }
                });
                this.done();
            }

            return false;
        },
        onError: function(operation, error, template) {
            if (error.nameError) {
                alert("You forgot to put in your name");
            } else {
                alert("Something went wrong. Try again or bug Kevin");
            }
        }
    }
});