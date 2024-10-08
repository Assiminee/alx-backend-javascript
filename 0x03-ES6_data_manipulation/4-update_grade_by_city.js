const updateStudentGradeByCity = (studentList, location, newGrades) => studentList.filter(
  (student) => (student.location.toUpperCase() === location.toUpperCase()),
).map((student) => {
  const grade = newGrades.find((grade) => grade.studentId === student.id);
  // eslint-disable-next-line no-param-reassign
  student.grade = grade || 'N/A';
  return student;
});

export default updateStudentGradeByCity;
