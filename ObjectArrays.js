//1 create array of objects called libraries. ea with property name(string), address (string), 
//and object named headLibrarian with prop name and age

let libraries = [
    {
        name: "Eastgardens Library",
        address: "152 Bunnerong Rd, Eastgardens NSW 2036",
        headLibrarian: {
            name: "Davis",
            age: 34
        },
        books: [
            {
                title: "Harry Potter and the Philosopher's Stone",
                author: "J. K. Rowling",
                yearOfPublication: 1997
            }, {
                title: "Harry Potter and the Chamber of Secrets",
                author: "J. K. Rowling",
                yearOfPublication: 1998
            }, {
                title: "Harry Potter and the Prisoner of Azkaban",
                author: "J. K. Rowling",
                yearOfPublication: 1999
            }, {
                title: "Harry Potter and the Goblet of Fire",
                author: "J. K. Rowling",
                yearOfPublication: 2000
            }, {
                title: "Harry Potter and the Order of the Phoenix",
                author: "J. K. Rowling",
                yearOfPublication: 2003
            }, {
                title: "Harry Potter and the Half-Blood Prince",
                author: "J. K. Rowling",
                yearOfPublication: 2005
            }, {
                title: "Harry Potter and the Deathly Hallows",
                author: "J. K. Rowling",
                yearOfPublication: 2007
            }
        ]
    }, {
        name: "Randwick City Library",
        address: "669/673 Anzac Parade, Maroubra NSW 2035",
        headLibrarian: {
            name: "Claudia",
            age: 28
        },
        books: [
            {
                title: "The Hobbit",
                author: "J. R. R. Tolkien",
                yearOfPublication: 1937
            }, {
                title: "The Fellowship of the Ring",
                author: "J. R. R. Tolkien",
                yearOfPublication: 1954
            }, {
                title: "The Hobbit",
                author: "The Two Towers",
                yearOfPublication: 1954
            }, {
                title: "The Return of the King",
                author: "J. R. R. Tolkien",
                yearOfPublication: 1955
            }
        ]
    }
]
for (let library of libraries) {

    for (let book of library.books) {
        if (book.yearOfPublication > 2000) {
            console.log(book.title)
        }
    }
}

for (let library of libraries) {
    for (let book of library.books)
        if (library.headLibrarian.age <= 30) {
            console.log(book.author)
        }
}


for (let library of libraries) {
    let before2000 = 0
    for (let publishedYear of library.books) {
        if (publishedYear.yearOfPublication < 2000) {
            before2000++;
            console.log(before2000)
        }
    } if (before2000 >= 3) {
        console.log(library.name);
    }
}