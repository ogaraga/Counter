import { useState } from "react"
import CounterContext from "./CounterContext"

export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0)
   
  return (
    <div>
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    </div>
  )
}
