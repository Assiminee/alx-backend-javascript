const express = require('express');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    let message = '';
    const fields = {};
    const students = data.split('\n')
        .map((student) => student.trim())
        .filter((student) => student.length !== 0);

    students.shift();

    message += `\nNumber of students: ${students.length}`;

    for (const student of students) {
      const line = student.split(',');
      const field = line[line.length - 1];

      if (!(field in fields)) {
        fields[field] = { count: 1, names: [line[0]] };
      } else {
        fields[field].count += 1;
        fields[field].names.push(line[0]);
      }
    }

    for (const [field, values] of Object.entries(fields)) {
      message += `\nNumber of students in ${field}: ${values.count}. List: ${values.names.join(', ')}`;
    }
    resolve(message);
  });
});

const db = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students');
  countStudents(db)
    .then((output) => {
      res.end(output);
    })
    .catch(() => {
      res.end('\nCannot load the database');
    });
});

app.listen(1245, 'localhost');

module.exports = app;
