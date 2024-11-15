import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './logo.png';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
  },
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex h-screen bg-gray-900 ">
        {isSidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}
        <div className="flex-1">
        <div className="flex items-center justify-center mb-4">
        <h2 className="text-center text-2xl font-bold text-white flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          massegeGPT
        </h2>
      </div>
          <ChatBox toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
