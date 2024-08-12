import { useState } from "react";
import { Foo } from "./components/ui/Foo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Foo />
    </>
  );
}

export default App;
