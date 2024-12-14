
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [click, setClick] = useState(0);

  return (
    <div>
        <div>Button clicked {click} times</div>
        <button onClick={() => setClick(click+1)}>Click Me</button>
    </div>
  )
}

export default App
