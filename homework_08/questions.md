1. db.restaurant.find();
2. db.restaurant.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});
3. db.restaurant.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1});
4. db.restaurant.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, "address.zipcode": 1});
5. db.restaurant.find({district: "Bronx"});
6. db.restaurant.find({district: "Bronx"}).limit(5);
7. db.restaurant.find({district: "Bronx"}).skip(5).limit(5);
8. db.restaurant.find( {"address.coord": {$lt: -95.754168}}); 
9. db.restaurant.find( {cuisine: {$ne : "American "}, "grades.score": {$gt: 70}, "address.coord": {$lt: -65.754168} });
10. db.restaurant.find({name: {$regex: "^Wil"}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});
11. db.restaurant.find({name: {$regex: "ces$"}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});
12. db.restaurant.find({name: {$regex: "Reg"}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});
13. db.restaurant.find({district: "Bronx", cuisine: {$in: ["American ", "Chinese"]}});
14. db.restaurant.find({district: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});
15. db.restaurant.find({district: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});
16. db.restaurant.find({"grades.score": {$lte: 10}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});
17. db.restaurant.find({"address.coord.1": {$gt: 42, $lt: 52}}, {restaurant_id: 1, name: 1, address: 1});
18. db.restaurant.find({}).sort({name: 1});
19. db.restaurant.find({}).sort({name: -1});
20. db.restaurant.find({}).sort({cuisine: 1, district: -1});
21. db.restaurant.find({"address.street": {$exists: false}}).count();
22. db.restaurant.find({"address.coord": {$type: "double"}}).count();
23. db.restaurant.find({name: {$regex: "^Mad"}}, {_id: 0, name: 1, district: 1, cuisine: 1, "address.coord": 1});


DB: homework_08
collection: restaurant