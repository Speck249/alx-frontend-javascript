export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Zarah',
  lastName: 'Bemnet',
  experienceTeachingC = 10;
}

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(getRequirements());
console.log(getAvailableTeacher());

console.log('Java');
Java.setTeacher = cTeacher;
console.log(getRequirements());
console.log(getAvailableTeacher());

console.log('React');
React.setTeacher = cTeacher;
console.log(getRequirements());
console.log(getAvailableTeacher());
