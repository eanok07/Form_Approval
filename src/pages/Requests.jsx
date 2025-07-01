// import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
// import { Send } from '@mui/icons-material';

// const Requests = () => {
//   return (
//     <Box sx={{ flexGrow: 1, p: 3 }}>
//       <Typography variant="h4" gutterBottom>Submit Request</Typography>
//       <Card>
//         <CardContent>
//           <TextField fullWidth label="Request Type" margin="normal" />
//           <TextField fullWidth label="Description" multiline rows={4} margin="normal" />
//           <Button 
//             variant="contained" 
//             startIcon={<Send />}
//             sx={{ mt: 2 }}
//           >
//             Submit Request
//           </Button>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Requests;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import { Send } from '@mui/icons-material';

const Requests = () => {
  const [requestData, setRequestData] = useState({
    type: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend API
    console.log('Submitting request:', requestData);
    
    // Store in local storage (simulating backend)
    const requests = JSON.parse(localStorage.getItem('requests') || '[]');
    requests.push({
      ...requestData,
      id: Date.now(),
      status: 'Pending',
      date: new Date().toISOString()
    });
    localStorage.setItem('requests', JSON.stringify(requests));
    
    // Redirect to home/dashboard
    navigate('/');
  };

  const handleChange = (e) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>Submit Request</Typography>
      <Card component="form" onSubmit={handleSubmit}>
        <CardContent>
          <TextField
            fullWidth
            name="type"
            label="Request Type"
            margin="normal"
            value={requestData.type}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            name="description"
            label="Description"
            multiline
            rows={4}
            margin="normal"
            value={requestData.description}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            startIcon={<Send />}
            sx={{ mt: 2 }}
          >
            Submit Request
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Requests;