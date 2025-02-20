import { useState } from "react";
import "./App.css";
import { SumTest } from "./sum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SumTest />
      </div>
    </>
  );
}

export default App;
