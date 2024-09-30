export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (departmentArr) => Object.entries(departmentArr).length,
  };
}
