interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Betel',
  lastName: 'Zewdu',
  age: 17,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Yohannes',
  lastName: 'Damtew',
  age: 18,
  location: 'Nairobi',
};

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
headerRow.innerHTML = `
  <th>firstName</th>
  <th>location</th>
`;
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');
studentList.forEach((student: Student) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  `;
  tbody.appendChild(row);
});
table.appendChild(tbody);

document.body.appendChild(table);
