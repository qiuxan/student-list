import React, { useEffect, useState } from "react";
import StudentList from "../StudentList";
import { StudentInterface } from "../StudentList";
import { getStudents } from "../services/users";

function StudentListContainer() {
	const [studentList, setStudentList] = useState<StudentInterface[]>([]);

	useEffect(() => {
		getStudents(1, 10).then((data) => setStudentList(data));
	}, []);// the empty array is to make sure that the effect is only run once because it has no dependencies

	return (
		<>
			<StudentList students={studentList} />
		</>
	);
}

export default StudentListContainer;
