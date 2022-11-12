import { useRef } from 'react'
import Code from './components/Code'

function App() {

  const input = useRef()

  return (
    <div className="App">
       <h2>Generador Codigo QR</h2>
       <Code input={input} />
    </div>
  )
}

export default App
