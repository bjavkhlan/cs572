const db;

db.zips.aggregate( [
    { $match: {
        state: "WA"
    }},
    { $group: {
        _id: null,
        zips: { $push: "$_id"}
    }},
    { $unwind: "$zips" },
    { $project: {
        _id: 0
    }}
]);

db.zips.aggregate( [
    { $match: {
        pop: {$lt: 5000}
    }}
]);




db.zips.aggregate( [
    { $group: {
        _id: {
            state: "$state",
            city: "$city"
        },
        zips: { $sum: 1 }
    }},
    { $match: {
        zips: { $gt: 1 }
    }},
    { $project: {
        zips: 0
    }},
    { $sort: {
        "_id.state": 1,
        "_id.city": 1
    }}
]);

db.zips.aggregate([
    { $group: {
        _id: {
            state: "$state",
            city: "$city"
        },
        pop: { $sum: "$pop" } 
    }},
    { $sort: {
        pop: 1
    }},
    { $group: {
        _id: { state: "$_id.state"},
        city: { $first: "$_id.city"},
        population: { $first: "$pop"}
    }},
    { $sort: {
        "_id.state": 1
    }}
]);