// import React from 'react';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Button,
//   Toolbar,
//   Divider
// } from '@mui/material';
// import {
//   Home as HomeIcon,
//   Description as RequestsIcon,
//   CheckCircle as ApprovalsIcon,
//   Assessment as ReportsIcon,
//   Settings as SettingsIcon,
//   Help as HelpIcon,
//   Add as AddIcon
// } from '@mui/icons-material';

// const Sidebar = () => {
//   try {
//     return (
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: 240,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: 240,
//             boxSizing: 'border-box',
//             borderRight: '1px solid #dbe0e6',
//           },
//         }}
//       >
//         <Toolbar /> {/* Spacer for app bar */}
//         <Divider />
//         <List>
//           <ListItem button selected>
//             <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
//             <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600 }} />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon><RequestsIcon /></ListItemIcon>
//             <ListItemText primary="Requests" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon><ApprovalsIcon /></ListItemIcon>
//             <ListItemText primary="Approvals" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon><ReportsIcon /></ListItemIcon>
//             <ListItemText primary="Reports" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon><SettingsIcon /></ListItemIcon>
//             <ListItemText primary="Settings" />
//           </ListItem>
//         </List>
//         <Divider />
//         <div style={{ padding: '16px' }}>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             startIcon={<AddIcon />}
//             sx={{ mb: 2 }}
//           >
//             New Request
//           </Button>
//           <List>
//             <ListItem button>
//               <ListItemIcon><HelpIcon /></ListItemIcon>
//               <ListItemText primary="Help and Docs" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>
//     );
//   } catch (error) {
//     console.error('Error in Sidebar component:', error);
//     return (
//       <div style={{ padding: 16, color: 'red' }}>
//         Error loading sidebar. Please try again later.
//       </div>
//     );
//   }
// };

// export default Sidebar;

import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Toolbar
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
          <ListItem 
            button 
            component={Link} 
            to="/"
            selected={window.location.pathname === '/'}
          >
            <ListItemIcon>
              <HomeIcon color={window.location.pathname === '/' ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText 
              primary="Home" 
              primaryTypographyProps={{ fontWeight: window.location.pathname === '/' ? 600 : 'normal' }} 
            />
          </ListItem>
          <ListItem 
            button 
            component={Link} 
            to="/requests"
            selected={window.location.pathname === '/requests'}
          >
            <ListItemIcon><RequestsIcon /></ListItemIcon>
            <ListItemText primary="Requests" />
          </ListItem>
          <ListItem 
            button 
            component={Link} 
            to="/approvals"
            selected={window.location.pathname === '/approvals'}
          >
            <ListItemIcon><ApprovalsIcon /></ListItemIcon>
            <ListItemText primary="Approvals" />
          </ListItem>
          <ListItem 
            button 
            component={Link} 
            to="/reports"
            selected={window.location.pathname === '/reports'}
          >
            <ListItemIcon><ReportsIcon /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem 
            button 
            component={Link} 
            to="/settings"
            selected={window.location.pathname === '/settings'}
          >
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
            component={Link}
            to="/requests/new"
            sx={{ mb: 2 }}
          >
            New Request
          </Button>
          <List>
            <ListItem 
              button 
              component={Link} 
              to="/help"
              selected={window.location.pathname === '/help'}
            >
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