const updateStudentGradeByCity = (studentList, location, newGrades) => studentList.filter(
  (student) => (student.location.toUpperCase() === location.toUpperCase()),
).map((student) => {
  const newGrade = newGrades.find((grade) => grade.studentId === student.id);
  // eslint-disable-next-line no-param-reassign
  student.grade = newGrade ? newGrade.grade : 'N/A';
  return student;
});

export default updateStudentGradeByCity;
