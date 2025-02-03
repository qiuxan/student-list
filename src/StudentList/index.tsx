import React, { useState } from 'react'

export interface StudentInterface {
    id: number;
    firstName: string;
    age: number;
    gender: string;
}

interface StudentListPropInterface {
    students: Array<StudentInterface>;
}


function StudentList({students}:StudentListPropInterface) {

  const list = students.map((student) => (
    <li key={student.id}>
      {student.firstName} {student.age} {student.gender}
    </li>)
  );
  return (
    <ul>{list}</ul>
  )
}



export default StudentList
