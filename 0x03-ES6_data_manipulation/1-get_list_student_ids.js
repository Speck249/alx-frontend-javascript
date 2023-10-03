export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const result = students.map((item) => item.id);
  return result;
}
