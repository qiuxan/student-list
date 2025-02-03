import { useState } from 'react'

import './App.css'
import StudentList from './StudentList'
import StudentListContainer from './StudentListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentListContainer/>
    </>
  )
}

export default App
