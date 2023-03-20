import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import MyCounter from './components/MyCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyCounter/>
    </div>
  )
}

export default App
