import React, { useEffect, useState } from "react";
import StudentList from "../StudentList";
import { StudentInterface } from "../StudentList";
import { getStudents } from "../services/users";
import Pager from "../Pager";

function StudentListContainer() {
	const [studentList, setStudentList] = useState<StudentInterface[]>([]);

    const [page, setPage] = useState(1);

	const [total, setTotal] = useState<number>(0);
	const [limit, setLimit] = useState<number>(10);
	const [panelNumber, setPanelNumber] = useState<number>(5);

  

	useEffect(() => {

		(async function(){
			const resp = await getStudents(page, limit);
			setStudentList(resp.users);
			setTotal(resp.total);

		})();
	}, [page,limit]);// whenever page updates, useEffect will run to get the new data
	return (
		<>
			<StudentList students={studentList} />
           
		   	<Pager
				current={page}
				total={total}
				limit={limit}
				panelNumber={panelNumber}
		
				onPageChange={
					(pageNumber: number) => {
						setPage(pageNumber);
					}
				}
			/>
		</>
	);
}

export default StudentListContainer;
