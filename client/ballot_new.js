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
            Meteor.call('ballotInsert', insertDoc, function(error, result) {
                Router.go('ballotEdit', {_id: result._id});
            });
            this.done();
            return false;
        }
    },
    editForm: {
        after: {
            update: function(error, result, template) {
                $("#save-glyph").show(200).delay(500).hide(500);
            }

        }
    }
});