if (Winner.find().count() == 0) {
    Winner.insert({
        counted_keys: ["_id", "counted_keys"]
    });
}