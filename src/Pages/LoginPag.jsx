import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useFuture } from '../Components/Hooks/useFuture';
import { SelectFormComp } from '../Components/SelectFormComp';
import * as control from '../Controllers/loginControl';
import Swal from 'sweetalert2';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://your-website.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const [cargaPagina,dataPagina]=useFuture(control.datosPagina);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await control.autenticarUsuario(event);
    if(!response[0].oboolean){
      Swal.fire({
        title:'Hubo un problema!',
        text: response[0].omessage,
        icon:'warning',
        confirmButtonText:'aceptar',
        confirmButtonColor: '#ce3124 '
      })
    }else{
      console.log(response);
      //navigate('/Home');
      const rol = parseInt(control.getUserRoleFromCookie());
      console.log(rol);
      if(rol===1){
        navigate('/Home');
      }else if(rol===4){
        navigate('/studentHome');

      }else{
        console.log("nada");
        
      }
      
      
    }
  };

  return (
    <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="inpEmail"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="inpPassword"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <SelectFormComp
            onchange={(e)=>e.target.value}
            name="idRol"
            text="Rol"
            options={dataPagina.rolesSelect}
          />
          <FormControlLabel
            control={<Checkbox name="checkRecordar" value="true" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link  onClick={() => navigate('/SignUp')} variant="body2" >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    </div>
  );
}

export {SignIn}