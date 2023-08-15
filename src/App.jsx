import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Button, Box, Container, Toolbar,
  Grid, Card, CardMedia, CardContent, } from '@mui/material';
import { useStyles } from './styles/styles';
import profile from './images/profile.png';
import logo from './images/logo.svg';
import NodeJs from './images/nodejs-logo.png';
import Express from './images/expressjs-logo.png';
import ReactJs from './images/react-logo.png';
import MongoDB from './images/MongoDB-logo.jpg';
import PostgreSQL from './images/postgresql-logo.png';
import Redis from './images/redis-logo.png';
import RabbitMQ from './images/rabbitmq-logo.png';
import Socket from './images/socket-io.png';
import Html5 from './images/html5-logo.png';
import Css3 from './images/css3.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import { Link, scroller } from 'react-scroll';
// import { gsap } from 'gsap';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const darkTheme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#EDEDED',
          textDecoration: 'none',
          '&:hover': {
            color: '#1ed760',
            textDecoration: 'none',
          },
        },
        
      },
    },
  },
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

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1000,
      smooth: 'easeInOutQuart',
      // offset: -50,
    });
  }
  // Skill Section
  let skillImages = [NodeJs, Express, ReactJs, MongoDB, PostgreSQL, Redis, RabbitMQ,
    Socket, Html5, Css3 ]
  let skill = ['Node.js', 'Express', 'React.js', 'MongoDB', 'PostgreSQL', 'Redis', 'RabbitMQ',
    'Socket.io', 'Html5', 'Css3' ]
  const gridItems = skillImages.map((ele, index) => (
    <Grid key={index} item xs={12} sm={12} md={3} lg={2}>
      <Box className={classes.logoBackground}>
        <CardMedia className={classes.skillLogo}
          component="img"
          image= {ele}
          alt={ele}
        />
      </Box>
      <Typography className={classes.skillText}>{skill[index]}</Typography>
    </Grid>
  ));
  
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth='lg' >
          <Toolbar sx={{ padding: '24px', borderBottom: '2px solid #1d1c1c' }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
              <CardMedia className={classes.logo}
                component="img"
                image= {logo}
                alt={logo}
              />
              </Grid>
              <Grid m={'auto'} item xs={6}>
                <div className={classes.alignLinkCenter}>
                  <Link className={classes.navLink} to="hero" smooth>Home</Link>
                  <Link className={classes.navLink} to="about" smooth>About</Link>
                  <Link className={classes.navLink} to="skills" smooth>Skills</Link>
                  <Link className={classes.navLink} to="contact" smooth >Contact</Link>
                </div>
              </Grid>
              <Grid item xs={3} className={classes.navButton}>
                <Box pl={2}>
                  <Button smooth={true} onClick={() => scrollToSection('contact')} variant="contained">Hire Me</Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
          <section className={classes.alignHeight}>
              <Grid container > 
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}> 
                  <Box  pt={5} pb={5} >
                    <CardContent  p={5}>
                      <Typography variant='h2'>Hi Folks,{'\u{1F44B}'}</Typography>
                      <Typography mb={2} variant='h2'>I'm Saravanan</Typography>
                      <Typography className={classes.cardContent} variant='h6'>Full stack Software Engineer based in chennai, India.</Typography>
                      <Typography className={classes.cardContent} variant='h6'>I have 2.5 years experience on React and Nodejs.</Typography>
                      <Box pt={2}>
                      <Button onClick={() => scrollToSection('contact')} variant="contained" >Contact Me</Button>
                      </Box>
                      <Typography mt={2} variant='h5'>Software Engineer - Full Time</Typography>
                    </CardContent>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Box pt={5} pb={5} className={classes.alignCenter}>
                    <CardMedia className={classes.roundedMedia}
                      component="img"
                      image= {profile}
                      alt="profile"
                    />
                  </Box>
                </Grid>
              </Grid>
          </section>
          <section id='about' className={classes.alignHeight} pt={5} pb={5}>
            <Grid container spacing={2}> 
              <Grid item xs={12}>
                <Typography p={2} mt={3} variant="h2">About</Typography>
                <Typography pl={2} pr={2} mt={2} variant='h6'>{'\u{1F4BB}'} - My career was starting Intern to a Full-time Mern stack developer of web development.</Typography>
                <Typography pl={2} pr={2} mt={2} variant='h6'>{'\u{1F4B0}'} - Apart from coding, I know about stocks & commodity markets and digitalized currencies like crypto trading and collaborate with stock market enthusiast peoples.</Typography>
                <Typography pl={2} pr={2} mt={2} variant='h6'>{'\u{1F3AF}'} - My expertise is the next level of build-to-own product AI usings to market analysis on daily basis.</Typography>
                <Typography pl={2} pr={2} mt={2} variant='h6'>{'\u{1F4AA}'} - Full-time coder & Short term trader.</Typography>
                <Typography pl={2} pr={2} mt={2} variant='h6'>{'\u{1F3AE}'} - Player of Snooker on weekend.</Typography>
                <Typography pl={2} pr={2} mt={2} variant='h6'>{'\u270C'} - Fiction Book{'\u{1F4DA}'} reader &  Movie{'\u{1F3A5}'} Buff on Weekend.</Typography>
                <Typography pl={2} pr={2} mt={2} variant='h6'></Typography>
              </Grid>
            </Grid>
          </section>
          <section id='skills' className={classes.alignHeight} pt={5} pb={5}>
            <Box>
              <Typography p={2} mt={3} variant="h2">Skills In Tech</Typography>
              <Grid pt={3} pb={3} container spacing={2}>
                {gridItems}
              </Grid>
            </Box>
          </section>
          <section name="contact" id="contact" className={classes.alignHeight} pt={5} pb={5}>
            <Box pt={3} pl={5}> 
            <Typography variant="h2">Contact</Typography>
              <Typography mb={3} textAlign='center' variant='h4'>Get in touch{'\u{1F44B}'}</Typography>
              <Grid className={classes.alignCenter} container spacing={2}>
                <Grid p={2} item xs={4}>
                  <Card className={classes.contactCard}>
                    <MailIcon className={classes.contactIcon} color="action" />
                    <Link className={classes.link} to='#'>saravananaks97@gmail.com</Link>
                  </Card>
                </Grid>
                <Grid p={2} item xs={4}>
                  <Card className={classes.contactCard}>
                    <PhoneIphoneIcon className={classes.contactIcon} color="action" />
                    <Link className={classes.link} to='hero'>+919487013219</Link>
                    {/* <ContentCopyIcon /> */}
                  </Card>
                </Grid>
                <Grid p={2} item xs={8}>
                  <Card className={classes.contactCard}>
                    <Typography className={classes.contactIcon}>Github -</Typography>
                    <a className={classes.link} target='blank' href ='https://github.com/saravanan-SM'>https://github.com/saravanan-SM</a>
                  </Card>
                </Grid>
                <Grid p={2} item xs={8}>
                  <Card className={classes.contactCard}>
                    <Typography className={classes.contactIcon}>LinkedIn -</Typography>
                    <a className={classes.link} target='blank' href ='https://linkedin.com/in/saravanan-aks'>https://linkedin.com/in/saravanan-aks</a>
                  </Card>
                </Grid>
                <Grid p={2} item xs={8}>
                  <Card className={classes.contactCard}>
                    <Typography className={classes.contactIcon}>Twitter -</Typography>
                    <a className={classes.link} target='blank' href='https://twitter.com/SaravananAks219'>https://twitter.com/SaravananAks219</a>
                  </Card>
                </Grid>
                
              </Grid>
              
              {/* <Typography>{''}saravananaks97@gmail.com</Typography> */}
              {/* <Typography>+919487013219</Typography> */}
            </Box>
          </section>  
          <Box  pt={5} pb={5} className={classes.footer}>
            <Box>
              <a className={classes.footerLink} target="blank" href='https://github.com/saravanan-SM'><GitHubIcon color="action" /></a>
              <a className={classes.footerLink} target="blank" href='https://linkedin.com/in/saravanan-aks'><LinkedInIcon color="action" /></a>
              <a className={classes.footerLink} target="blank" href='https://twitter.com/SaravananAks219'><TwitterIcon color="action" /></a>
            </Box>
            <Typography mt={1} variant="body2" color="textSecondary">
              © {new Date().getFullYear()} PORTFOLIO. All rights reserved.
            </Typography>
            {/* <Typography variant="body2" color="textSecondary">
              Created with ❤️ using {'\u{1F44B}'} React and Material-UI
            </Typography> */}
          </Box>
        </Container>
    </ThemeProvider>
  );  
};