import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Paper, Typography, Button, TextField } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0',
    },
    background: {
      default: '#1a1a2e',
      paper: '#16213e',
    },
  },
});

function ChatApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([
    { type: 'ai', content: "Hello! I'm your MSL Insights Assistant. Please upload a file to get started!" },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { type: 'user', content: input.trim() }]);
      setInput('');
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'ai', content: "I'm an AI assistant. I can help you analyze your data once you upload a file." }]);
      }, 1000);
    }
  };

  const handleFileUpload = (file) => {
    console.log('File uploaded:', file.name);
    setMessages(prev => [...prev, { type: 'ai', content: `Great! I've received your file: ${file.name}. What would you like to know about it?` }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="flex h-screen bg-gray-900 text-white relative overflow-hidden ">
        {isSidebarOpen && (
          <Paper 
            elevation={3} 
            className="absolute md:relative md:w-80 w-full h-full p-4 bg-purple-900 text-white overflow-y-auto z-20 pt-16"
          >
            <Typography variant="h5" className="mb-4 mt-20">
              MSL Insights Assistant
            </Typography>
            <Typography variant="body2" className="mb-4">
              An intuitive application that allows you to interact with your data using natural language.
            </Typography>
            <div className="mb-4">
              <Typography variant="subtitle1" className="mb-2">
                Upload a file for analysis
              </Typography>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <p className="mb-2">Drag and drop file here</p>
                <p className="text-sm text-gray-400 mb-2">Limit 200MB per file • CSV, XLSX, XLS</p>
                <Button
                  variant="contained"
                  component="label"
                  className="bg-purple-700 hover:bg-purple-800"
                >
                  Browse files
                  <input
                    type="file"
                    hidden
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                    accept=".csv,.xlsx,.xls,.jpg,.png,.jpeg"
                  />
                </Button>
              </div>
            </div>
            <Typography variant="h6" className="mb-2">
              Features
            </Typography>
            <ul className="list-disc pl-5">
              <li>Conversational AI: Converts natural language into actionable insights.</li>
              <li>Data Analysis Integration: Enables interaction with uploaded data files for detailed analysis.</li>
              <li>Dynamic Responses: Retains context for seamless conversations.</li>
            </ul>
          </Paper>
        )}
        <main className={`flex-1 flex flex-col ${isSidebarOpen ? '' : ''}`}>
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 z-30 p-2 rounded-full bg-purple-700 text-white"
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
          <Paper elevation={3} className="flex-1 flex flex-col bg-gray-800 overflow-hidden ">
            <div className="flex-1 overflow-y-auto p-4 ml-20 mr-20" >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-purple-700 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-4 bg-gray-900 ml-20 mr-6">
              <div className="flex">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="mr-2"
                  InputProps={{
                    style: { color: 'white' },
                  }}
                />
                <Button type="submit" variant="contained" className="bg-purple-700 hover:bg-purple-800">
                  Send
                </Button>
              </div>
            </form>
          </Paper>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default ChatApp;
