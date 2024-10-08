import getStudentsByLocation from './2-get_students_by_loc';

const updateStudentGradeByCity = (studentList, location, newGrades) => {
  const students = getStudentsByLocation(studentList, location);

  return students.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    // eslint-disable-next-line no-param-reassign
    student.grade = grade || 'N/A';
    return student;
  });
};

export default updateStudentGradeByCity;
