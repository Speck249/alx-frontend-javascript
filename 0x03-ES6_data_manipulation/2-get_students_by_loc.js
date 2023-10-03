export default function getStudentsByLocation(students, city) {
  const result = students.filter((item) => item.location.includes(city));
  return result;
}
