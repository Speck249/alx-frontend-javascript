export default function updateStudentGradeByCity(students, city, newGrades) {
  const output = students.filter((item) => item.location === city);
  const mappedStudents = output.map((item) => {
    const gradeObj = newGrades.find((score) => score.studentId === item.id);

    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return {
      id: item.id,
      firstName: item.firstName,
      location: item.location,
      grade,
    };
  });

  return mappedStudents;
}
