const { createServer } = require('http');
const fs = require('fs');

const db = process.argv[2];

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

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (res.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(db).then((data) => {
      res.write('This is the list of our students');
      res.end(data);
    }).catch(() => {
      res.end('Cannot load the database');
    });
  }
});

app.listen(1245, '127.0.0.1');

module.exports = app;
