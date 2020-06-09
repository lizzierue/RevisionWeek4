let schools = [
    {
        name: "St Josephs HighSchool",
        address: "152 Bunnerong Rd, Eastgardens NSW 2036",
        headTeacher: {
            title: "Mr",
            lastName: "Singer",
        },

        students: [
            {
                firstName: "Harry",
                lastName: "Rowling",
                age: 16,
                yearGroup: 10,
            }, {
                firstName: "Harper",
                lastName: "Can",
                age: 17,
                yearGroup: 10,
            }, {
                firstName: "Veronica",
                lastName: "Flemming",
                age: 16,
                yearGroup: 9,
            },

        ],
        Teachers: [
            {
                Title: "Mr",
                lastName: "Rowling",
                subject: "Maths",
            }, {
                Title: "Mrs",
                lastName: "Clarke",
                subject: "English",
                yearGroup: 10,
            }]



    }, {
        name: "Manly Primary School",
        address: "669/673 Anzac Parade, Maroubra NSW 2035",
        headTeacher: {
            title: "Miss",
            lastName: "Flooring",
        },
        students: [
            {
                firstName: "Sally",
                lastName: "Cooper",
                age: 12,
                yearGroup: 7,
            }, {
                firstName: "Hunter",
                lastName: "Views",
                age: 10,
                yearGroup: 5,
            }, {
                firstName: "Hannah",
                lastName: "Fields",
                age: 9,
                yearGroup: 5,
            },
        ],
        Teachers: [
            {
                Title: "Mr",
                lastName: "Hog",
                subject: "Science",
            }, {
                Title: "Mrs",
                lastName: "Kent",
                subject: "Religion",

            }]

    }
]

//// use a for loop to write out all the students with yearGroup greater than 9

for (let school of schools) {
    for (let student of school.students) {
    if (student.yearGroup >= 9) {
        console.log(`${student.firstName} ${student.lastName}`)
    }
}

// write teachers that work at school with 4 students or less


// for (let school of schools) {
//     for (let teacher of school.Teachers) {
//         if (school.students.length <= 4) {
//             console.log(`${teacher.Title} ${teacher.lastName}`
//             )
//         }
//     }


// fullname of all student with age 12 and yeargroup 7

    // for (let school of schools){
    //     for (let student of school.students) {
    //         if (student.yearGroup == 7 && student.age == 12) {
    //             console.log(`${student.firstName} ${student.lastName}`)

    //         }
    //     }
    // }
}