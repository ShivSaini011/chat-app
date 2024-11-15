import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../logo.png'; // Adjust path based on your project structure

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 fixed h-full">
      <div className="flex justify-between items-center mb-4">
        <IconButton onClick={closeSidebar} className="text-white">
          <CloseIcon />
        </IconButton>
      </div>
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-center text-2xl font-bold text-white flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          massegeGPT
        </h2>
      </div>
      <List>
        <ListItem button>
          <ListItemIcon><ChatIcon className="text-white" /></ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><FileCopyIcon className="text-white" /></ListItemIcon>
          <ListItemText primary="Files" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PersonIcon className="text-white" /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
