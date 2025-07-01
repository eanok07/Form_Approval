import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(role === 'admin' ? '/approvals' : '/');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Login</Typography>
          <Button 
            fullWidth 
            variant="contained" 
            sx={{ mt: 2 }}
            onClick={() => handleLogin('admin')}
          >
            Login as Admin
          </Button>
          <Button 
            fullWidth 
            variant="outlined" 
            sx={{ mt: 2 }}
            onClick={() => handleLogin('user')}
          >
            Login as User
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;