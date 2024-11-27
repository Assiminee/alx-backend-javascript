const {createServer} = require('http')
const fs = require("fs");

const db = process.argv[2];

const countStudents = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }
            let message = "";
            const fields = {}
            let students = data.split('\n')
                .map(student => student.trim())
                .filter(student => student.length !== 0);

            students.shift();

            message += `Number of students: ${students.length}`;

            for (const student of students) {
                let line = student.split(',');
                let field = line[line.length - 1];

                if (!(field in fields)) {
                    fields[field] = {count: 1, names: [line[0]]};
                } else {
                    fields[field].count += 1;
                    fields[field].names.push(line[0]);
                }
            }

            for (const [field, values] of Object.entries(fields)) {
                message += `\nNumber of students in ${field}: ${values.count}. List: ${values.names.join(', ')}`
            }
            resolve(message);
        });
    })

}

const app = createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');

    if (req.url.endsWith('/')) {
        res.end('Hello Holberton School!');
    } else if (req.url.endsWith('/students')) {
        const count = await countStudents(db);
        res.end(`This is the list of our students\n${count}`);
    }
});

app.listen(1245, '127.0.0.1');

module.exports = app;