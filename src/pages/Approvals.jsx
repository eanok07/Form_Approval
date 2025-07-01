// import { useState, useEffect } from 'react';
// import { Box, Typography, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Chip } from '@mui/material';

// const Approvals = () => {
//   const [allRequests, setAllRequests] = useState([]);

//   useEffect(() => {
//     // Load all requests from local storage
//     const requests = JSON.parse(localStorage.getItem('requests')) || [];
//     setAllRequests(requests);
//   }, []);

//   return (
//     <Box sx={{ flexGrow: 1, p: 3 }}>
//       <Typography variant="h4" gutterBottom>Approvals</Typography>
//       <Card>
//         <CardContent>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Request Type</TableCell>
//                 <TableCell>Description</TableCell>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {allRequests.map((request) => (
//                 <TableRow key={request.id}>
//                   <TableCell>{request.type}</TableCell>
//                   <TableCell>{request.description}</TableCell>
//                   <TableCell>{new Date(request.date).toLocaleDateString()}</TableCell>
//                   <TableCell>
//                     <Chip 
//                       label={request.status} 
//                       color={
//                         request.status === 'Approved' ? 'success' :
//                         request.status === 'Rejected' ? 'error' : 'warning'
//                       } 
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Approvals;


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, Typography, Card, CardContent, Table, TableBody, 
  TableCell, TableHead, TableRow, Chip, Button, ButtonGroup 
} from '@mui/material';
import { Check, Close } from '@mui/icons-material';

const Approvals = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load requests from localStorage
    const storedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    setRequests(storedRequests);
  }, []);

  const handleApprove = (id) => {
    const updatedRequests = requests.map(request => 
      request.id === id ? { ...request, status: 'Approved' } : request
    );
    updateRequests(updatedRequests);
  };

  const handleReject = (id) => {
    const updatedRequests = requests.map(request => 
      request.id === id ? { ...request, status: 'Rejected' } : request
    );
    updateRequests(updatedRequests);
  };

  const updateRequests = (updatedRequests) => {
    // Update state and localStorage
    setRequests(updatedRequests);
    localStorage.setItem('requests', JSON.stringify(updatedRequests));
    
    // Redirect to dashboard after 1 second
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>Approvals</Typography>
      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Request Type</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.type}</TableCell>
                  <TableCell>{request.description}</TableCell>
                  <TableCell>{new Date(request.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Chip 
                      label={request.status} 
                      color={
                        request.status === 'Approved' ? 'success' :
                        request.status === 'Rejected' ? 'error' : 'warning'
                      } 
                    />
                  </TableCell>
                  <TableCell>
                    {request.status === 'Pending' && (
                      <ButtonGroup size="small">
                        <Button 
                          startIcon={<Check />} 
                          onClick={() => handleApprove(request.id)}
                          color="success"
                        >
                          Approve
                        </Button>
                        <Button 
                          startIcon={<Close />} 
                          onClick={() => handleReject(request.id)}
                          color="error"
                        >
                          Reject
                        </Button>
                      </ButtonGroup>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Approvals;