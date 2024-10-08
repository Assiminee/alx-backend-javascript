const getStudentIdsSum = (studentList) => studentList.reduce(
  (acc, student) => (acc + student.id), 0,
);

export default getStudentIdsSum;
