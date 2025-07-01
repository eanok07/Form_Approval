import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Home as HomeIcon,
  Description as RequestsIcon,
  CheckCircle as ApprovalsIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/requests">
          <ListItemIcon><RequestsIcon /></ListItemIcon>
          <ListItemText primary="Requests" />
        </ListItem>
        {user?.role === 'admin' && (
          <ListItem button component={Link} to="/approvals">
            <ListItemIcon><ApprovalsIcon /></ListItemIcon>
            <ListItemText primary="Approvals" />
          </ListItem>
        )}
        <ListItem button component={Link} to="/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;