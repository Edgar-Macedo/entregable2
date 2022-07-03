import { useState } from 'react'
import './App.css'
import WeatherBox from './Components/WeatherBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <WeatherBox/>
    </div>
  )
}

export default App
