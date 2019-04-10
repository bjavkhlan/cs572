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

//~~~~~~~~~~~~~~~~~~~~~~~~~~//

// studentSchema = {
//     studentId: String, 
//     name: String,
//     email: String,
//     phone: String,
//     borrowedBook: [{
//         book: {
//             isbn: String,
//             author: String,
//             tag: [String]
//         },
//         dueDate: Date,
//         returnedDate: Date
//     }],
// }


