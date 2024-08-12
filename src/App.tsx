import { useState } from "react";
import { Foo } from "./components/ui/Foo";
import { Box, Button } from "@mui/material";
import { Fab } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    if (count < 10) setCount((count) => count + 1);
  };

  const handleDec = () => {
    if (count > 0) setCount((count) => count - 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {count}
      <Box sx={{}}>
        <Fab onClick={handleInc} color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
        <Fab onClick={handleDec} color="primary" aria-label="add" size="small">
          <RemoveIcon />
        </Fab>
      </Box>

      <Foo />
    </>
  );
}

export default App;
