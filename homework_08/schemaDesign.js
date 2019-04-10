bookSchema = {
    isbn: String, 
    author: String,
    keywords: [String],
    borrows: [{
        student: studentId,
        contactInfo: String,
        dueDate: Date
    }]
}

document = {
    "isbn": "alsklf234988234k",
    "author": "Asaad Saad",
    "keywords": ["Angular", "Node JS", "Exress", "MongoDB"],
    "title": "Modern Web Application",
    "borrows": [
        {
            "student": 986950,
            "name": "Javkhlan",
            "phone": "+97680093386",
            "dueDate": "28th April, 2019"
        },
        {
            "student": 986906,
            "name": "Munkhzul",
            "phone": "+97699119922",
            "dueDate": "29th April, 2019"
        }
    ]
}
/*
    Usually users search books by keywords, and author or isbn.
*/

let db;
db.books.createIndex({title: 'text'});
db.books.find({$text: {$search: "Web Application"}});
db.books.createIndex({keywords: 1, author: 1});
db.books.find({keyword: "Angular", author: "Asaad Saad"}).hint({keywords: 1, author: 1});
db.books.createIndex({isbn: 1});
db.books.find({isbn: "2345678asdf"}).hint({isbn: 1});

