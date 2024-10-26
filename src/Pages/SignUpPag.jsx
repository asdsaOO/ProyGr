import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFuture } from '../Components/Hooks/useFuture';
import * as controller from '../Controllers/signUpControl';
import { SelectFormComp } from '../Components/SelectFormComp';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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

export default function SignUp() {
  const navigate = useNavigate();
  const [cargaPagina,dataPagina]= useFuture(controller.datosPagina);

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('handle');
    
    const response=await controller.registrarUsuario(event);
    /*const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName')
    });*/
    console.log(response);
    if(response[0].oboolean){
      Swal.fire(
        {
          title:'Se registro correctamente',
          text:'El registro se realizo exitosamente, podras ingresar una vez habilitado por el docente.',
          icon:'success',
          confirmButtonText:'aceptar'
        }
      ).then((result)=>result.isConfirmed?navigate('/'):null);

    }else{
      Swal.fire({
        title:'Hubo un problema!',
        text:'Error: '+response[0].omessage,
        icon:'error',
        confirmButtonText:'aceptar'
      })
    }
    
  };

  return (
    <div>
      {cargaPagina?<a>cargando</a>
      :
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="inpNombre"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="inpApellido"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type='email'
                id="email"
                label="Email Address"
                name="inpEmail"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="inpPassword"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <SelectFormComp
                onchange={(e)=>e.target.value}
                name="idRol"
                text="Roll"
                options={dataPagina.rolesSelect}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
      }
    
    </div>
  );
 
}

export {SignUp}