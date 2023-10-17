import './App.css'
import { useState } from 'react'
import { TrafficLight } from './TrafficLight'

export type initLight = 'stop' | 'go' | ''
export type lightState = 'stop' | 'wait' | 'go'

function App() {
  const [initialState, setInitialState] = useState<initLight>('')
  const [state, setState] = useState<lightState>("stop")

  return (
    <div className='main'>
      <TrafficLight initState={initialState} state={state} setState={setState}/>
      <div className='set-buttons'>
        <button onClick={() => {setState('stop'); setInitialState('stop'); }}>Set Stop</button>
        <button onClick={() => {setState('go'); setInitialState('go'); }}>Set Go</button>
      </div>
    </div>
  )
}

export default App
