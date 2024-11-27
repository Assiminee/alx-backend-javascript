import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const fields = {};
    const students = data.split('\n')
      .map((student) => student.trim())
      .filter((student) => student.length !== 0);

    students.shift();

    for (const student of students) {
      const line = student.split(',');
      const field = line[line.length - 1];

      if (!(field in fields)) {
        fields[field] = { names: [line[0]] };
      } else {
        fields[field].names.push(line[0]);
      }
    }

    resolve(fields);
  });
});

export default readDatabase;
