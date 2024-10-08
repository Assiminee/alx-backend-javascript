const getStudentsByLocation = (studentList, location) => studentList.filter(
  (student) => (student.location.toUpperCase() === location.toUpperCase()),
);

export default getStudentsByLocation;
