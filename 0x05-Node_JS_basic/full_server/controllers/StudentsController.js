import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path)
      .then((data) => {
        let resParts = 'This is the list of our students';
        const keys = Object.keys(data)
          .sort((a, b) => {
            const [ia, ib] = [a.toLowerCase(), b.toLowerCase()];

            if (ia < ib) return -1;
            if (ia > ib) return 1;
            return 0;
          });

        for (const field of keys) resParts += `\nNumber of students in ${field}: ${data[field].names.length}. List: ${data[field].names.join(', ')}`;

        res.status(200).send(resParts);
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!VALID_MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
      .then((data) => {
        let resText = '';

        if (Object.keys(data).includes(major)) {
          const students = data[major];
          resText = `List: ${students.names.join(', ')}`;
        }
        res.status(200).send(resText);
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;