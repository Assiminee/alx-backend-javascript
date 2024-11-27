const { createServer } = require('http');
const fs = require('fs');

const db = process.argv[2];

async function countStudents(dbName) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const stdList = data.split('\n').slice(1, -1);
      const ldb = [];
      const fields = {};
      for (const l of stdList) {
        const temp = l.split(',');
        ldb.push(temp);
        fields[temp[temp.length - 1]] = [];
      }
      for (const s of ldb) {
        if (s[s.length - 1] === 'CS') fields.CS.push(s[0]);
        else if (s[s.length - 1] === 'SWE') fields.SWE.push(s[0]);
      }
      const info = {
        count: stdList.length,
        cs: {
          count: fields.CS.length,
          names: fields.CS.join(', '),
        },
        swe: {
          count: fields.SWE.length,
          names: fields.SWE.join(', '),
        },
      };
      const msg = [
        `Number of students: ${info.count}`,
        `Number of students in CS: ${info.cs.count}. List: ${info.cs.names}`,
        `Number of students in SWE: ${info.swe.count}. List: ${info.swe.names}`,
      ];

      resolve(msg.join('\n'));
    });
  });
}

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
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
