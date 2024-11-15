import React, { useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ChatBox = ({ toggleSidebar, isSidebarOpen }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [attachment, setAttachment] = useState(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isResponse: false }]);
      setMessage('');
      // Simulate a response message
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'This is a response!', isResponse: true }]);
      }, 1000);
    }
  };

  const handleAttachment = (event) => {
    setAttachment(event.target.files[0]);
    setMessages([...messages, { text: `Attached: ${event.target.files[0].name}`, isResponse: false }]);
  };

  return (
    <div 
    className={`${
        !isSidebarOpen ?"flex flex-col  p-4 text-white bg-gray-900" :"hidden"}`}>
      <div className="flex justify-between items-center mb-4">
       {
        !isSidebarOpen &&  (<IconButton onClick={toggleSidebar} className="lg:hidden text-white ">
        <MenuIcon />
      </IconButton>)
       }
        <h1 className="text-center text-3xl font-bold flex-1">What can I help with?</h1>
      </div>
      <div className="flex-1 overflow-y-auto mb-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded ${msg.isResponse ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div
        className="flex items-center mb-2">
        <TextField
          variant="outlined"
          placeholder="MessageGPT"
          className="flex-1 mr-2 bg-gray-800 rounded text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{
            startAdornment: (
              <label htmlFor="file-upload">
                <IconButton component="span">
                  <AttachFileIcon className="text-white" />
                </IconButton>
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleAttachment}
                />
              </label>
            ),
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;
