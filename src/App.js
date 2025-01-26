import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scences/global/Topbar";
import Dashboard from "./scences/dashboard";
import Sidebar from "./scences/global/Sidebar";
import Bar from "./components/Barchart";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" height="100vh">
          {/* Sidebar Section */}
          <Box
            sx={{
              position: "sticky",  // Makes sidebar stick to the left
             
              height: "100vh", // Ensures sidebar occupies full height of the screen
            }}
          >
            <Sidebar isSidebar={isSidebar} />
          </Box>

          {/* Main Content Section */}
          <Box
       
          >
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bar" element={<Bar />} />
              {/* Add other routes here */}
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
