import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Table from "./Cointable";


let theme = createTheme({
  palette: {
    mode: "dark",
  },
});


function App() {
  return (
<>
    <ThemeProvider theme={theme}>    
      <Table />
    </ThemeProvider> 


</>
  );
}

export default App;
