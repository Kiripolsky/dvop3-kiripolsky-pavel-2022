import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProjectItems from './ProjectItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProjectItems/>
    </div>
  )
}

export default App
