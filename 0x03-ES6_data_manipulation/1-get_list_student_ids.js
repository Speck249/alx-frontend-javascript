export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  else {
    const result = students.map((item) => item.id);
    return result;
  }
}
