import { useEffect } from 'react'
import './App.css'

type lightState = 'stop' | 'wait' | 'go' | ''

export function TrafficLight({initState, state, setState}: any) {

  useEffect(() => {
    if (initState === "stop") {
        if (state === "stop") {
            setTimeout(() => setState("wait"), 2000)
        } else if (state === "wait") {
            setTimeout(() => setState("go"), 3000)
        }
    } else if (initState === "go") {
        if (state === "go") {
            setTimeout(() => setState("wait"), 2000)
        } else if (state === "wait") {
            setTimeout(() => setState("stop"), 3000)
        }
    }
  }, [initState, state])

  function getLightState (lightstate: lightState) {
    return "light " + lightstate + (state === lightstate ? " on" : "")
  }
  
  return (
    <div className='traffic-light'>
      <div className={getLightState("stop")}></div>
      <div className={getLightState("wait")}></div>
      <div className={getLightState("go")}> </div>
    </div>
  )
}