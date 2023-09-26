export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employees = [];

  for (let departmentEmployees of departments) {
    employees = employees.concat(departmentEmployees);
  }

  let currentIndex = 0;

  const iterator = {
    next() {
      if (currentIndex < employees.length) {
        return {
          value: employees[currentIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };

  return iterator;
}
