import { useState } from "react";

import "./App.css";
import StudentList from "./StudentList";
import StudentListContainer from "./StudentListContainer";
import useAllUsers from "./hooks/useAllUsers";
export interface UserInterface {
  id: number;
  firstName: string;
  age: number;
  gender: string;
}


function Test() {
	const users = useAllUsers<UserInterface>();
	return <div>
    {users.map(user => (
      <div key={user.id}>
        {user.firstName} {user.age} {user.gender}
      </div>
    ))}
  </div>;
}

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Test />
			<StudentListContainer />
		</>
	);
}

export default App;
