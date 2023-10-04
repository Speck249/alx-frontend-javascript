interface Teacher {
  readonly firstName: string;
  readonly firstName: string;
  fullTimeEmployee: boolean;
  yearOfExperience?: number;
  location: string;
  [attribute: string]: boolean | string | number;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}.${lastName}`;
}

interface studentClassConstructor {
  new (firstName: string, lastName: string): studentMethods;
}

interface studentMethods {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: studentClassConstructor = class StudentClass implements studentMethods {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently Working";
  }

  displayName() {
    return this.firstName;
  }
};
