const fs = require('fs');

const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const fields = {}
        let students = data.split('\n')
            .map(student => student.trim())
            .filter(student => student.length !== 0);

        students.shift();

        console.log(`Number of students: ${students.length}`);

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
            console.log(`Number of students in ${field}: ${values.count}. List: ${values.names.join(', ')}`);
        }
    } catch (e) {
        throw new Error('Cannot load the database')
    }
}

module.exports = countStudents;