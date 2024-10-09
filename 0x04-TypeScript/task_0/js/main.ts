interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const s1: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 27,
    location: "London",
}

const s2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 17,
    location: "London",
}

const studentsList: Student[] = [s1, s2];

// Create table
const table = document.createElement("table");

// Create table head and table body
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Create table row to put headers in
const tr = document.createElement("tr");

// Create the table headers for name and location
["Name", "Location"].forEach((elem) => {
    const th = document.createElement("th");

    th.textContent = elem;
    tr.appendChild(th);
})

// Group the headers in thead
thead.appendChild(tr);

// Create a table row for each student in studentsList
for (const student of studentsList) {
    const tr = document.createElement("tr");
    [student.firstName, student.location].forEach((elem) => {
        const td = document.createElement("td");

        td.textContent = elem;
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}

// Append thead and tbody to the table
table.appendChild(thead);
table.appendChild(tbody);

// Append the table to the body
document.body.appendChild(table);
