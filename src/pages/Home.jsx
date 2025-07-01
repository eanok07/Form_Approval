import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Home as HomeIcon,
  Description as RequestsIcon,
  CheckCircle as ApprovalsIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Add as AddIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';

const Dashboard = () => {
  // State for navigation
  const [activeTab, setActiveTab] = useState('Home');

  // State for pending approvals
  const [approvals, setApprovals] = useState([
    { id: 1, request: 'IT Equipment', submittedBy: 'Sarah Chen', date: '2023-09-15', status: 'Pending' },
    { id: 2, request: 'Travel Expense', submittedBy: 'David Lee', date: '2023-09-14', status: 'Pending' }
  ]);

  // State for recent activities
  const [activities] = useState([
    { id: 1, title: 'IT Equipment request submitted', date: '2023-09-15' },
    { id: 2, title: 'System maintenance completed', date: '2023-09-10' }
  ]);

  // Handle approval action
  const handleApprove = (id) => {
    setApprovals(approvals.map(item =>
      item.id === id ? { ...item, status: 'Approved' } : item
    ));
  };

  // Handle reject action
  const handleReject = (id) => {
    setApprovals(approvals.map(item =>
      item.id === id ? { ...item, status: 'Rejected' } : item
    ));
  };

  // Render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Requests':
        return <Typography>Requests Content</Typography>;
      case 'Approvals':
        return <Typography>Approvals Content</Typography>;
      case 'Reports':
        return <Typography>Reports Content</Typography>;
      case 'Settings':
        return <Typography>Settings Content</Typography>;
      case 'Help and Docs':
        return <Typography>Help Content</Typography>;
      default:
        return (
          <>
            {/* Pending Approvals Table */}
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Pending Approvals</Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Request</TableCell>
                      <TableCell>Submitted By</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {approvals.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.request}</TableCell>
                        <TableCell>{row.submittedBy}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>
                          <Chip
                            label={row.status}
                            color={
                              row.status === 'Approved' ? 'success' :
                              row.status === 'Rejected' ? 'error' : 'warning'
                            }
                          />
                        </TableCell>
                        <TableCell>
                          {row.status === 'Pending' && (
                            <>
                              <Button
                                size="small"
                                onClick={() => handleApprove(row.id)}
                                sx={{ mr: 1 }}
                              >
                                Approve
                              </Button>
                              <Button
                                size="small"
                                color="error"
                                onClick={() => handleReject(row.id)}
                              >
                                Reject
                              </Button>
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Recent Activity</Typography>
                <List>
                  {activities.map((activity) => (
                    <React.Fragment key={activity.id}>
                      <ListItem>
                        <ListItemText
                          primary={activity.title}
                          secondary={activity.date}
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </>
        );
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Navigation */}
      <Box sx={{ width: 240, bgcolor: 'background.paper', p: 2 }}>
        <List>
          <ListItem button onClick={() => setActiveTab('Home')}>
            <HomeIcon sx={{ mr: 2 }} />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => setActiveTab('Requests')}>
            <RequestsIcon sx={{ mr: 2 }} />
            <ListItemText primary="Requests" />
          </ListItem>
          <ListItem button onClick={() => setActiveTab('Approvals')}>
            <ApprovalsIcon sx={{ mr: 2 }} />
            <ListItemText primary="Approvals" />
          </ListItem>
          <ListItem button onClick={() => setActiveTab('Reports')}>
            <ReportsIcon sx={{ mr: 2 }} />
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button onClick={() => setActiveTab('Settings')}>
            <SettingsIcon sx={{ mr: 2 }} />
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddIcon />}
            sx={{ mb: 2 }}
          >
            New Request
          </Button>
          <List>
            <ListItem button onClick={() => setActiveTab('Help and Docs')}>
              <HelpIcon sx={{ mr: 2 }} />
              <ListItemText primary="Help and Docs" />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {activeTab === 'Home' ? 'Dashboard' : activeTab}
        </Typography>
        {renderTabContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;