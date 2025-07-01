import { 
  Box, Typography, Card, CardContent, Table, TableBody, 
  TableCell, TableHead, TableRow, LinearProgress, Chip, 
  Button, Breadcrumbs, Link
} from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

const RequestDetails = () => {
  const approvalHistory = [
    { id: 1, approver: 'Sophia Clark', status: 'Approved', date: 'July 27, 2024', comments: 'Looks good to me.' },
    { id: 2, approver: 'Liam Harper', status: 'Approved', date: 'July 26, 2024', comments: 'Initial approval granted.' },
    { id: 3, approver: 'Ethan Carter', status: 'Submitted', date: 'July 26, 2024', comments: 'Request submitted for review.' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
        <Link color="inherit" href="#">Requests</Link>
        <Typography color="text.primary">Request Details</Typography>
      </Breadcrumbs>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            mb: 4,
            gap: 2
          }}>
            <Box>
              <Typography variant="h4" gutterBottom>Request Details</Typography>
              <Typography color="text.secondary">
                Request ID: <Box component="span" fontWeight="medium">#1234567890</Box>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip 
                label="In Review" 
                sx={{ 
                  backgroundColor: 'warning.light',
                  color: 'warning.dark',
                  fontWeight: 500
                }} 
              />
              <Button variant="text" color="primary">Actions</Button>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
              <Button variant="text" sx={{ 
                borderBottom: '3px solid',
                borderColor: 'primary.main',
                color: 'primary.main',
                borderRadius: 0,
                fontWeight: 600
              }}>
                Details
              </Button>
              <Button variant="text" sx={{ 
                color: 'text.secondary',
                borderRadius: 0,
                fontWeight: 600,
                '&:hover': {
                  color: 'primary.main',
                  borderBottom: '3px solid',
                  borderColor: 'primary.light'
                }
              }}>
                History
              </Button>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>Request Information</Typography>
            <Table>
              <TableBody>
                <TableRow sx={{ backgroundColor: 'action.hover' }}>
                  <TableCell sx={{ fontWeight: 'medium', color: 'text.secondary' }}>Request Type</TableCell>
                  <TableCell>IT Support</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'medium', color: 'text.secondary' }}>Submitted By</TableCell>
                  <TableCell>Ethan Carter</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: 'action.hover' }}>
                  <TableCell sx={{ fontWeight: 'medium', color: 'text.secondary' }}>Submitted On</TableCell>
                  <TableCell>July 26, 2024</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'medium', color: 'text.secondary' }}>Department</TableCell>
                  <TableCell>Information Technology</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: 'action.hover' }}>
                  <TableCell sx={{ fontWeight: 'medium', color: 'text.secondary' }}>Reason</TableCell>
                  <TableCell>
                    Need assistance with software installation. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>Approval Status</Typography>
            <Card variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 1
              }}>
                <Typography fontWeight="medium">Overall Progress</Typography>
                <Typography color="primary" fontWeight="medium">60% Complete</Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={60} 
                sx={{ height: 8, borderRadius: 4, mb: 1 }}
              />
              <Typography variant="caption" color="text.secondary">
                Waiting for final approval from Dr. Eleanor Vance.
              </Typography>
            </Card>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Approval History</Typography>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'action.hover' }}>
                  <TableCell sx={{ fontWeight: 'medium' }}>Approver</TableCell>
                  <TableCell sx={{ fontWeight: 'medium' }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 'medium' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 'medium' }}>Comments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {approvalHistory.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.approver}</TableCell>
                    <TableCell>
                      <Chip 
                        label={row.status} 
                        size="small"
                        sx={{ 
                          backgroundColor: 
                            row.status === 'Approved' ? 'success.light' : 
                            row.status === 'Submitted' ? 'info.light' : 'default',
                          color: 
                            row.status === 'Approved' ? 'success.dark' : 
                            row.status === 'Submitted' ? 'info.dark' : 'default',
                          fontWeight: 500
                        }} 
                      />
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>{row.date}</TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>{row.comments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RequestDetails;