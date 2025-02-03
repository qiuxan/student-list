import React, { useEffect, useState } from "react";
import StudentList from "../StudentList";
import { StudentInterface } from "../StudentList";
import { getStudents } from "../services/users";

function StudentListContainer() {
	const [studentList, setStudentList] = useState<StudentInterface[]>([]);

	useEffect(() => {
		getStudents(1, 10).then((data) => setStudentList(data));
	}, []);

	return (
		<>
			<StudentList students={studentList} />
		</>
	);
}

export default StudentListContainer;
