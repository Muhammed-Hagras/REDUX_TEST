import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './cmponents/counter'
import MyCounter from './cmponents/MyCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyCounter/>
    </div>
  )
}

export default App
