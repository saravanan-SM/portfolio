import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(( theme ) => ({
    roundedMedia: {
      borderRadius: '50%',
      backgroundColor: '#1ed760',
      width: '400px !important',
      height: '400px',
    },
    alignHeight: {
      minHeight: 'calc(100vh - 90px)',
      display: 'flex',
      alignItems: 'center'
    },
    alignCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    navButton: {
      display: 'flex',
      justifyContent: 'end'
    },
    cardContent:{
      fontSize: '16px !important'
    },
    link: {
      textDecoration: 'none !important',
      color: 'inherit !important',
    },
    logoBackground: {
      margin: 'auto',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      display: 'flex',
    },
    skillLogo: {
      width: '40px !important',
      height: '40px',
      backgroundColor: '#fff',
      margin: 'auto'
    },
    skillText: {
      textAlign: 'center',
      margin: '17px 0px !important',
      fontSize: '18px !important'
    },
    footer: {
      textAlign: 'center',
      borderTop: '2px solid #1d1c1c'
    },
    contactCard: {
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    contactIcon: {
      marginRight: '10px !important'
    },
    contact: {
      color: '#EDEDED'
    }
    // socialMedia: {
      
    // },
}))