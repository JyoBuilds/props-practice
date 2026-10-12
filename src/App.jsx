import React from 'react'
import "./App.css"
import Child from './components/Child'
import Pizza from "./assets/Pizza.avif"
const App = () => {
  const title="Pizza";
  const Price=305;
  return (
    <div>
      <Child  pizza={Pizza} title={title} price={Price} />
    </div>
  )
}

export default App
