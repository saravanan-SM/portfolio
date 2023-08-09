import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Button, Box, Container, Toolbar, Link,
  Grid, CardMedia, CardContent, } from '@mui/material';
import { useStyles } from './styles/styles';
import profile from './images/profile.png';
import nodejs from './images/nodejs-logo.png';
import express from './images/expressjs-logo.png';
import react from './images/react-logo.png';
import mongodb from './images/MongoDB-logo.jpg';
import postgresql from './images/postgresql-logo.png';
import redis from './images/redis-logo.png';
import rabbitmq from './images/rabbitmq-logo.png';
import socket from './images/socket-io.png';
import html5 from './images/html5-logo.png';
import css3 from './images/css3.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1ed760',
      // main: '#0093FF', // complementary color of #FF6C00 is #0093FF.
      dark: '#1ed760'
    },
    text:{
      primary: "#EDEDED"
    },
    
    secondary: {
      main: "#dc660f"
      // main: "#dc660f"
    }
  },
  typography: {
    button: {
      fontSize: '16px',
      textTransform: 'none',
      textDecoration: 'captialize'
    },
    link: {
      textTransform: 'none',
    }
  }

});

export default function App() {
  const classes = useStyles();
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth='lg' >
          <Toolbar sx={{ padding: '24px', borderBottom: '2px solid #1d1c1c' }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Portfolio
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.alignCenter}>
                <Link pr={2} href="/" className={classes.link}>Home</Link>
                <Link pl={2} pr={2} href="/about" className={classes.link}>About</Link>
                <Link pl={2} pr={2} href="/about" className={classes.link}>Skills</Link>
                <Link pl={2} href="/contact" className={classes.link}>Contact</Link>
              </Grid>
              <Grid item xs={3} className={classes.navButton}>
                <Box pl={2}>
                  <Button variant="contained">Hire Me</Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
          <Box pt={5} pb={5}>
            <Grid  container spacing={2}> 
              <Grid m={'auto'} item xs={6}>
                <Box m={'auto'} pt={5} pb={5} >
                  <CardContent p={5}>
                    <Typography variant='h2'>Hi Folks.,</Typography>
                    <Typography mb={2} variant='h2'>I'm Saravanan</Typography>
                    <Typography className={classes.cardContent} variant='h6'>Full stack Software Engineer based in chennai, India.</Typography>
                    <Typography className={classes.cardContent} variant='h6'>I have 2.5 years experience on React and Nodejs.</Typography>
                    <Box pt={2}>
                      <Button variant="contained">Contact Me</Button>
                    </Box>
                    <Typography mt={2} variant='h5'>Software Engineer - Full Time</Typography>
                  </CardContent>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box pt={5} pb={5} className={classes.alignCenter}>
                  <CardMedia className={classes.roundedMedia}
                    component="img"
                    image= {profile}
                    alt="profile"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box pt={5} pb={5}>
            <Typography p={2} mt={3} variant="h3">Skills In Tech</Typography>
            <Grid pt={3} pb={3} container spacing={2}>
              <Grid item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {nodejs}
                    alt="nodejs"
                  />
                </Box>
                <Typography className={classes.skillText}>Node.js</Typography>
              </Grid>
              <Grid item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {express}
                    alt="express"
                  />
                </Box>
                <Typography className={classes.skillText}>Express.js</Typography>
              </Grid>
              <Grid  item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {react}
                    alt="react"
                  />
                </Box>
                <Typography className={classes.skillText}>React.js</Typography>
              </Grid>
              <Grid item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {mongodb}
                    alt="mongodb"
                  />
                </Box>
                <Typography className={classes.skillText}>MongoDB</Typography>
              </Grid>
              <Grid item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {postgresql}
                    alt="postgresql"
                  />
                </Box>
                <Typography className={classes.skillText}>PostgreSQL</Typography>
              </Grid>
              <Grid item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {redis}
                    alt="redis"
                  />
                </Box>
                <Typography className={classes.skillText}>Redis</Typography>
              </Grid>
            </Grid>
            <Grid pt={3} pb={3} container spacing={2}>
              <Grid  item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {rabbitmq}
                    alt="rabbitmq"
                  />
                </Box>
                <Typography className={classes.skillText}>RabbitMQ</Typography>
              </Grid>
              <Grid item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {socket}
                    alt="socket"
                  />
                </Box>
                <Typography className={classes.skillText}>Socket.io</Typography>
              </Grid>
              <Grid item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {html5}
                    alt="html5"
                  />
                </Box>
                <Typography className={classes.skillText}>HTML</Typography>
              </Grid>
              <Grid item xs={2}>
                <Box className={classes.logoBackground}>
                  <CardMedia className={classes.skillLogo}
                    component="img"
                    image= {css3}
                    alt="css3"
                  />
                </Box>
                <Typography className={classes.skillText}>CSS</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box pt={5} pb={5}>
            <Typography variant="h3">Contact</Typography>
            <Typography variant='h5'>Let's Work Together!</Typography>
            <Typography>saravananaks97@gmail.com</Typography>
            <Typography>+919487013219</Typography>
            <Typography>Outside of codingPersonal Touch:</Typography>
          </Box>  
          <Box pt={5} pb={5} className={classes.footer}>
            <Box>
              <Link pr={2} href='https://github.com/saravananaks97'><GitHubIcon color="action" /></Link>
              <Link pl={2} pr={2} href='https://linkedin.com/in/saravanan-aks'><LinkedInIcon color="action" /></Link>
              <Link pl={2} href='https://twitter.com/SaravananAks219'><TwitterIcon color="action" /></Link>
            </Box>
            <Typography mt={1} variant="body2" color="textSecondary">
              © {new Date().getFullYear()} PORTFLEO. All rights reserved.
            </Typography>
            {/* <Typography variant="body2" color="textSecondary">
              Created with ❤️ using React and Material-UI
            </Typography> */}
          </Box>
        </Container>
    </ThemeProvider>
  );  
};