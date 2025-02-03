import React, { useEffect, useState } from "react";
import StudentList from "../StudentList";
import { StudentInterface } from "../StudentList";
import { getStudents } from "../services/users";

function StudentListContainer() {
	const [studentList, setStudentList] = useState<StudentInterface[]>([]);

    const [page, setPage] = useState(1);

	useEffect(() => {
		getStudents(page, 10).then((data) => setStudentList(data));
	}, [page]);// whenever page updates, useEffect will run to get the new data
	return (
		<>
			<StudentList students={studentList} />
            <input type="number" value={page} onChange={(event)=>{
                setPage(parseInt(event.target.value));
                getStudents(page, 10).then((data) => setStudentList(data));
            }} />
		</>
	);
}

export default StudentListContainer;
