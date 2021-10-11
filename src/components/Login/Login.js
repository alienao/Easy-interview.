import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import styles from './Login.module.css';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box className={styles.contMain}>
      <ThemeProvider theme={theme}>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#cfe8fc',
              justifyItems:"center"
            }}
          >
            <Typography sx={{ mt: 4, mb: 2 }}>
              <span className={styles.header}>Log In</span>
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <InputLabel shrink htmlFor="email" sx={{ mt: 3, ml: 5, mr: 5 }}>
                <span className={styles.email}>Email Address</span>
              </InputLabel>

              <TextField
                className={styles.emailField}
                sx={{ ml: 5, mr: 5 }}
                required
                style={{ width: 364 }}
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <InputLabel
                shrink
                htmlFor="password"
                sx={{ mt: 3, ml: 5, mr: 5 }}
              >
                <span className={styles.password}>Password</span>
              </InputLabel>

              <TextField
                sx={{ ml: 5, mr: 5 }}
                style={{ width: 364 }}
                required
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <FormControlLabel
                sx={{ mt: 1.5, ml: 4, mr: 5 }}
                control={<Checkbox value="remember" color="primary" />}
                label={
                  <span style={{ fontSize: '14px' }}>{'Remember me'}</span>
                }
              />

              <Grid container>
                <Grid item sx={{ mt: 1, ml: 5, mr: 5 }}>
                  <span className={styles.createAcc}>
                    {"Don't have an account.Create account "}
                  </span>
                  <Link
                    href="#"
                    variant="body2"
                    style={{ textDecoration: 'none', color: '#4B63CB' }}
                  >
                    {' here'}
                  </Link>
                </Grid>
              </Grid>

              <Button
                style={{ backgroundColor: '#4B63CB' }}
                type="submit"
                size="large"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 5, mr: 5 }}
              >
                <span className={styles.btn}>Log In</span>
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
