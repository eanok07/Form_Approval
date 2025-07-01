// import React from 'react';

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <h2>Navigation</h2>
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/requests">Requests</a></li>
//                 <li><a href="/approvals">Approvals</a></li>
//                 <li><a href="/settings">Settings</a></li>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Toolbar,
  Divider
} from '@mui/material';
import {
  Home as HomeIcon,
  Description as RequestsIcon,
  CheckCircle as ApprovalsIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Add as AddIcon
} from '@mui/icons-material';

const Sidebar = () => {
  try {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            borderRight: '1px solid #dbe0e6',
          },
        }}
      >
        <Toolbar /> {/* Spacer for app bar */}
        <Divider />
        <List>
          <ListItem button selected>
            <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon><RequestsIcon /></ListItemIcon>
            <ListItemText primary="Requests" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ApprovalsIcon /></ListItemIcon>
            <ListItemText primary="Approvals" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ReportsIcon /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />
        <div style={{ padding: '16px' }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<AddIcon />}
            sx={{ mb: 2 }}
          >
            New Request
          </Button>
          <List>
            <ListItem button>
              <ListItemIcon><HelpIcon /></ListItemIcon>
              <ListItemText primary="Help and Docs" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  } catch (error) {
    console.error('Error in Sidebar component:', error);
    return (
      <div style={{ padding: 16, color: 'red' }}>
        Error loading sidebar. Please try again later.
      </div>
    );
  }
};

export default Sidebar;