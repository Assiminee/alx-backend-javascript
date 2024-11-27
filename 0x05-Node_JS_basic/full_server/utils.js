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
// const readDatabase = (path) => new Promise((resolve, reject) => {
//   if (!path) {
//     reject(new Error('Cannot load the database'));
//     return;
//   }
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       reject(new Error('Cannot load the database'));
//     }
//     if (data) {
//       const fileLines = data
//         .toString('utf-8')
//         .trim()
//         .split('\n');
//       const studentGroups = {};
//       const dbFieldNames = fileLines[0].split(',');
//       const studentPropNames = dbFieldNames
//         .slice(0, dbFieldNames.length - 1);
//
//       for (const line of fileLines.slice(1)) {
//         const studentRecord = line.split(',');
//         const studentPropValues = studentRecord
//           .slice(0, studentRecord.length - 1);
//         const field = studentRecord[studentRecord.length - 1];
//         if (!Object.keys(studentGroups).includes(field)) {
//           studentGroups[field] = [];
//         }
//         const studentEntries = studentPropNames
//           .map((propName, idx) => [propName, studentPropValues[idx]]);
//         studentGroups[field].push(Object.fromEntries(studentEntries));
//       }
//       resolve(studentGroups);
//     }
//   });
// });

export default readDatabase;
module.exports = readDatabase;
