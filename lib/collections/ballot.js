Ballot = new Mongo.Collection("ballot");
Winner = new Mongo.Collection("winner");

var Schemas = {};

Schemas.WinnerScheme = new SimpleSchema({
    counted_keys: {
        type: [String]
    },
    picture: {
        type: String,
        label: "Best Motion Picture",
        optional: true,
        allowedValues: [
            "American Sniper",
            "Birdman",
            "Boyhood",
            "The Grand Budapest Hotel",
            "The Imitation Game",
            "Selma",
            "The Theory of Everything",
            "Whiplash"
        ]
    },
    actor: {
        type: String,
        label: "Best Actor",
        optional: true,
        allowedValues: [
            "Steve Carell, Foxcatcher",
            "Bradley Cooper, American Sniper",
            "Benedict Cumberbatch, The Imitation Game",
            "Michael Keaton, Birdman",
            "Eddie Redmayne, The Theory of Everything"
        ]
    },
    supporting_actor: {
        type: String,
        label: "Best Supporting Actor",
        optional: true,
        allowedValues: [
            "Edward Norton, Birdman",
            "Ethan Hawke, Boyhood",
            "J.K. Simmons, Whiplash",
            "Mark Ruffalo, Foxcatcher",
            "Robert Duvall, The Judge"
        ]
    },
    actress: {
        type: String,
        label: "Best Actress",
        optional: true,
        allowedValues: [
            "Felicity Jones, The Theory of Everything",
            "Julianne Moore, Still Alice",
            "Marion Cotillard, Two Days, One Night",
            "Reese Witherspoon, Wild",
            "Rosamund Pike, Gone Girl"
        ]
    },
    supporting_actress: {
        type: String,
        optional: true,
        label: "Best Supporting Actress",
        allowedValues: [
            "Emma Stone, Birdman",
            "Keira Knightley, The Imitation Game",
            "Laura Dern, Wild",
            "Meryl Streep, Into the Woods",
            "Patricia Arquette, Boyhood"
        ]
    },
    director: {
        type: String,
        label: "Best Director",
        optional: true,
        allowedValues: [
            "Alejandro Gonzalez Inarritu, Birdman",
            "Bennet Miller, Foxcatcher",
            "Morten Tyldum, The Imitation Game",
            "Richard Linklater, Boyhood",
            "Wes Anderson, The Grand Budapest Hotel"
        ]
    },
    animated: {
        type: String,
        label: "Best Animated Film",
        optional: true,
        allowedValues: [
            "Big Hero 6",
            "The Boxtrolls",
            "How to Train Your Dragon 2",
            "Song of the Sea",
            "The Tale of Princess Kaguya"
        ]
    },
    original_screenplay: {
        type: String,
        label: "Best Original Screenplay",
        optional: true,
        allowedValues: [
            "Birdman",
            "Boyhood",
            "Foxcatcher",
            "The Grand Budapest Hotel",
            "Nightcrawler"
        ]
    },
    adapted_screenplay: {
        type: String,
        label: "Best Adapted Screenplay",
        optional: true,
        allowedValues: [
            "American Sniper",
            "The Imitation Game",
            "Inherent Vice",
            "The Theory of Everything",
            "Whiplash"
        ]
    },
    foreign: {
        type: String,
        label: "Best Foreign Language Film",
        optional: true,
        allowedValues: [
            "Ida",
            "Leviathan",
            "Tangerines",
            "Timbuktu",
            "Wild Tales"
        ]
    },
    documentary_feature: {
        type: String,
        label: "Best Documentary - Feature",
        optional: true,
        allowedValues: [
            "CitizenFour",
            "Finding Vivian Maier",
            "Last Days in Vietname",
            "The Sale of the Earth",
            "Virunga"
        ]
    },
    documentary_short: {
        type: String,
        label: "Best Documentary - Short Subject",
        optional: true,
        allowedValues: [
            "Crisis Hotline: Veterans Press 1",
            "Joanna",
            "Our Curse",
            "The Reaper (La Parke)",
            "White Earth"
        ]
    },
    short_live: {
        type: String,
        label: "Best Live Action Short Film",
        optional: true,
        allowedValues: [
            "Aya",
            "Boogaloo and Graham",
            "Butter Lamp",
            "Parvaneh",
            "The Phone Call"
        ]
    },
    short_animated: {
        type: String,
        label: "Best Animated Short Film",
        optional: true,
        allowedValues: [
            "The Bigger Pciture",
            "The Dam Keeper",
            "Feast",
            "Me and My Moulton",
            "A Single Life"
        ]
    },
    score: {
        type: String,
        label: "Best Original Score",
        optional: true,
        allowedValues: [
            "The Grand Budapest Hotel, Alexandre Desplat",
            "The Imitation Game, Alexandre Desplat",
            "Interstellar, Hans Zimmer",
            "Mr. Turner, Gary Yershon",
            "The Theory of Everything, Jóhann Jóhannsson"
        ]
    },
    song: {
        type: String,
        label: "Best Original Song",
        optional: true,
        allowedValues: [
            "Everything is Awesome, The Lego Movie",
            "Glory, Selma",
            "Grateful, Beyond the Lights",
            "I'm Not Gonna Miss You, Glen Campbell",
            "Lost Stars, Begin Again"
        ]
    },
    sound_editing: {
        type: String,
        label: "Best Sound Editing",
        optional: true,
        allowedValues: [
            "American Sniper",
            "Birdman",
            "The Hobbit: Battle of the Five Armies",
            "Interstellar",
            "Unbroken"
        ]
    },
    sound_mixing: {
        type: String,
        label: "Best Sound Mixing",
        optional: true,
        allowedValues: [
            "American Sniper",
            "Birdman",
            "Whiplash",
            "Interstellar",
            "Unbroken"
        ]
    },
    production_design: {
        type: String,
        label: "Best Production Design",
        optional: true,
        allowedValues: [
            "The Grand Budapest Hotel",
            "The Imitation Game",
            "Interstellar",
            "Into the Woods",
            "Mr. Turner"
        ]
    },
    cinematography: {
        type: String,
        label: "Best Cinematography",
        optional: true,
        allowedValues: [
            "Birdman",
            "The Grand Budapest Hotel",
            "Ida",
            "Mr Turner",
            "Unbroken"
        ]
    },
    makeup: {
        type: String,
        label: "Best Makeup and Hairstyling",
        optional: true,
        allowedValues: [
            "Foxcatcher",
            "The Grand Budapest Hotel",
            "Guardians of the Galaxy"
        ]
    },
    costume: {
        type: String,
        label: "Best Costume Design",
        optional: true,
        allowedValues: [
            "The Grand Budapest Hotel",
            "Inherent Vice",
            "Into the Woods",
            "Maleficient",
            "Mr. Turner"
        ]
    },
    film_editing: {
        type: String,
        label: "Best Film Editing",
        optional: true,
        allowedValues: [
            "American Sniper",
            "Boyhood",
            "The Grand Budapest Hotel",
            "The Imitation Game",
            "Whiplash"
        ]
    },
    visual_effects: {
        type: String,
        label: "Best Visual Effects",
        optional: true,
        allowedValues: [
            "Captain American: The Winter Solider",
            "Dawn of the Planet of the Apes",
            "Guardians of the Galaxy",
            "Interstellar",
            "X-Men: Days of Future Past"
        ]
    }
});
Schemas.AnswerScheme = new SimpleSchema({
    picture: {
        type: String,
        label: "Best Motion Picture",
        optional: true,
        allowedValues: [
            "American Sniper",
            "Birdman",
            "Boyhood",
            "The Grand Budapest Hotel",
            "The Imitation Game",
            "Selma",
            "The Theory of Everything",
            "Whiplash"
        ]
    },
    actor: {
        type: String,
        label: "Best Actor",
        optional: true,
        allowedValues: [
            "Steve Carell, Foxcatcher",
            "Bradley Cooper, American Sniper",
            "Benedict Cumberbatch, The Imitation Game",
            "Michael Keaton, Birdman",
            "Eddie Redmayne, The Theory of Everything"
        ]
    },
    supporting_actor: {
        type: String,
        label: "Best Supporting Actor",
        optional: true,
        allowedValues: [
            "Edward Norton, Birdman",
            "Ethan Hawke, Boyhood",
            "J.K. Simmons, Whiplash",
            "Mark Ruffalo, Foxcatcher",
            "Robert Duvall, The Judge"
        ]
    },
    actress: {
        type: String,
        label: "Best Actress",
        optional: true,
        allowedValues: [
            "Felicity Jones, The Theory of Everything",
            "Julianne Moore, Still Alice",
            "Marion Cotillard, Two Days, One Night",
            "Reese Witherspoon, Wild",
            "Rosamund Pike, Gone Girl"
        ]
    },
    supporting_actress: {
        type: String,
        optional: true,
        label: "Best Supporting Actress",
        allowedValues: [
            "Emma Stone, Birdman",
            "Keira Knightley, The Imitation Game",
            "Laura Dern, Wild",
            "Meryl Streep, Into the Woods",
            "Patricia Arquette, Boyhood"
        ]
    },
    director: {
        type: String,
        label: "Best Director",
        optional: true,
        allowedValues: [
            "Alejandro Gonzalez Inarritu, Birdman",
            "Bennet Miller, Foxcatcher",
            "Morten Tyldum, The Imitation Game",
            "Richard Linklater, Boyhood",
            "Wes Anderson, The Grand Budapest Hotel"
        ]
    },
    animated: {
        type: String,
        label: "Best Animated Film",
        optional: true,
        allowedValues: [
            "Big Hero 6",
            "The Boxtrolls",
            "How to Train Your Dragon 2",
            "Song of the Sea",
            "The Tale of Princess Kaguya"
        ]
    },
    original_screenplay: {
        type: String,
        label: "Best Original Screenplay",
        optional: true,
        allowedValues: [
            "Birdman",
            "Boyhood",
            "Foxcatcher",
            "The Grand Budapest Hotel",
            "Nightcrawler"
        ]
    },
    adapted_screenplay: {
        type: String,
        label: "Best Adapted Screenplay",
        optional: true,
        allowedValues: [
            "American Sniper",
            "The Imitation Game",
            "Inherent Vice",
            "The Theory of Everything",
            "Whiplash"
        ]
    },
    foreign: {
        type: String,
        label: "Best Foreign Language Film",
        optional: true,
        allowedValues: [
            "Ida",
            "Leviathan",
            "Tangerines",
            "Timbuktu",
            "Wild Tales"
        ]
    },
    documentary_feature: {
        type: String,
        label: "Best Documentary - Feature",
        optional: true,
        allowedValues: [
            "CitizenFour",
            "Finding Vivian Maier",
            "Last Days in Vietname",
            "The Sale of the Earth",
            "Virunga"
        ]
    },
    documentary_short: {
        type: String,
        label: "Best Documentary - Short Subject",
        optional: true,
        allowedValues: [
            "Crisis Hotline: Veterans Press 1",
            "Joanna",
            "Our Curse",
            "The Reaper (La Parke)",
            "White Earth"
        ]
    },
    short_live: {
        type: String,
        label: "Best Live Action Short Film",
        optional: true,
        allowedValues: [
            "Aya",
            "Boogaloo and Graham",
            "Butter Lamp",
            "Parvaneh",
            "The Phone Call"
        ]
    },
    short_animated: {
        type: String,
        label: "Best Animated Short Film",
        optional: true,
        allowedValues: [
            "The Bigger Pciture",
            "The Dam Keeper",
            "Feast",
            "Me and My Moulton",
            "A Single Life"
        ]
    },
    score: {
        type: String,
        label: "Best Original Score",
        optional: true,
        allowedValues: [
            "The Grand Budapest Hotel, Alexandre Desplat",
            "The Imitation Game, Alexandre Desplat",
            "Interstellar, Hans Zimmer",
            "Mr. Turner, Gary Yershon",
            "The Theory of Everything, Jóhann Jóhannsson"
        ]
    },
    song: {
        type: String,
        label: "Best Original Song",
        optional: true,
        allowedValues: [
            "Everything is Awesome, The Lego Movie",
            "Glory, Selma",
            "Grateful, Beyond the Lights",
            "I'm Not Gonna Miss You, Glen Campbell",
            "Lost Stars, Begin Again"
        ]
    },
    sound_editing: {
        type: String,
        label: "Best Sound Editing",
        optional: true,
        allowedValues: [
            "American Sniper",
            "Birdman",
            "The Hobbit: Battle of the Five Armies",
            "Interstellar",
            "Unbroken"
        ]
    },
    sound_mixing: {
        type: String,
        label: "Best Sound Mixing",
        optional: true,
        allowedValues: [
            "American Sniper",
            "Birdman",
            "Whiplash",
            "Interstellar",
            "Unbroken"
        ]
    },
    production_design: {
        type: String,
        label: "Best Production Design",
        optional: true,
        allowedValues: [
            "The Grand Budapest Hotel",
            "The Imitation Game",
            "Interstellar",
            "Into the Woods",
            "Mr. Turner"
        ]
    },
    cinematography: {
        type: String,
        label: "Best Cinematography",
        optional: true,
        allowedValues: [
            "Birdman",
            "The Grand Budapest Hotel",
            "Ida",
            "Mr Turner",
            "Unbroken"
        ]
    },
    makeup: {
        type: String,
        label: "Best Makeup and Hairstyling",
        optional: true,
        allowedValues: [
            "Foxcatcher",
            "The Grand Budapest Hotel",
            "Guardians of the Galaxy"
        ]
    },
    costume: {
        type: String,
        label: "Best Costume Design",
        optional: true,
        allowedValues: [
            "The Grand Budapest Hotel",
            "Inherent Vice",
            "Into the Woods",
            "Maleficient",
            "Mr. Turner"
        ]
    },
    film_editing: {
        type: String,
        label: "Best Film Editing",
        optional: true,
        allowedValues: [
            "American Sniper",
            "Boyhood",
            "The Grand Budapest Hotel",
            "The Imitation Game",
            "Whiplash"
        ]
    },
    visual_effects: {
        type: String,
        label: "Best Visual Effects",
        optional: true,
        allowedValues: [
            "Captain American: The Winter Solider",
            "Dawn of the Planet of the Apes",
            "Guardians of the Galaxy",
            "Interstellar",
            "X-Men: Days of Future Past"
        ]
    }
});
Schemas.BallotScheme = new SimpleSchema({
    name: {
        type: String,
        label: "Nom de Plume"
    },
    first: {
        type: Schemas.AnswerScheme,
        label: "First Choice (10 points)"
    },
    second: {
        type: Schemas.AnswersScheme,
        label: "Second Choice (5 points)"
    }
});

var Collections = {};

Collections.Ballot = Ballot;
Collections.Winner = Winner;

Ballot.attachSchema(Schemas.BallotScheme);
Winner.attachSchema(Schemas.WinnerScheme);


Meteor.isClient && Template.registerHelper("Schemas", Schemas);
Meteor.isClient && Template.registerHelper("Collections", Collections);

Ballot.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    }
});

Winner.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    }
});

Meteor.methods({
    winnerUpdate: function () {
        var winner = Winner.findOne();
        var ballots = Ballot.find();

        for (var key in winner) {
            if (!winner.counted_keys.contains(key)) {
                var firstBallots = Ballot.find('first.' + key + '=' + winner[key]);
                var secondBallots = Ballot.find('second.' + key + '=' + winner[key]);
                for (var ballot in firstBallots) {
                    var ballotID = ballot._id;
                    var updatedProperties = {
                        points: ballot.points + 10,
                        history: ballot.point_history.append(ballot.points + 10)
                    };

                    Ballot.update(ballotID, {$set: updatedProperties});
                }

                for (var ballot in secondBallots) {
                    var ballotID = ballot._id;
                    var updatedProperties = {
                        points: ballot.points + 5,
                        history: ballot.point_history.append(ballot.points + 10)
                    };

                    Ballot.update(ballotID, {$set: updatedProperties});
                }

            }
        }
    }
});

Meteor.methods({
    ballotInsert: function (ballotAttributes) {
        var ballotWithSameLink = Ballot.findOne({name: ballotAttributes.name});
        if (ballotWithSameLink) {
            return {
                _id: ballotWithSameLink._id
            }
        }

        var ballot = _.extend(ballotAttributes, {
            points: 0,
            history: [
                0
            ]
        });

        var ballotID = Ballot.insert(ballotAttributes);
        return {
            _id: ballotID
        };
    }
});