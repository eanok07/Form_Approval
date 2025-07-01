import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import { Send } from '@mui/icons-material';

const Requests = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>Submit Request</Typography>
      <Card>
        <CardContent>
          <TextField fullWidth label="Request Type" margin="normal" />
          <TextField fullWidth label="Description" multiline rows={4} margin="normal" />
          <Button 
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