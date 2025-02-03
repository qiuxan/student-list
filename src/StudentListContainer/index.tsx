import React, { useEffect, useState } from "react";
import StudentList from "../StudentList";
import { StudentInterface } from "../StudentList";
import { getStudents } from "../services/users";
import Pager from "../Pager";

function StudentListContainer() {
	const [studentList, setStudentList] = useState<StudentInterface[]>([]);

    const [page, setPage] = useState(1);

	const [current, setCurrent] = useState<number>(3);
	const [total, setTotal] = useState<number>(100);
	const [limit, setLimit] = useState<number>(10);
	const [panelNumber, setPanelNumber] = useState<number>(5);
  
	function handlePageChange(pageNumber: number) {
	  setCurrent(pageNumber); 
	}
  

	useEffect(() => {
		getStudents(page, 10).then((data) => setStudentList(data));
	}, [page]);// whenever page updates, useEffect will run to get the new data
	return (
		<>
			<StudentList students={studentList} />
           
		   	<Pager
				current={current}
				total={total}
				limit={limit}
				panelNumber={panelNumber}
		
				onPageChange={
					(pageNumber: number) => {
						handlePageChange(pageNumber);
					}
				}
			/>
		</>
	);
}

export default StudentListContainer;
