import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import logo from "../images/octopus.png";
import { Link } from "react-router-dom";
import SendMessageList from './SendMessageList';
import ReceivedMessagesList from './ReceivedMessagesList';
import './styles.css';
import ScanQR from './ScanQR'
import MessagesToSend from './MessagesToSend';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <LogoWrapper>
    <Link to="/">
     <img src={logo} alt="Octopus-Logo" />
    </Link>
    <h4>MAILIO</h4>
   </LogoWrapper>
      <AppBar position="static" color='transparent'>
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tabs}>
          <Tab  label="Scan QR" {...a11yProps(0)} className='tab'/>
          <Tab  label="Send " {...a11yProps(1)} className='tab'/>
          <Tab  label="Received " {...a11yProps(2)} className='tab'/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
       <ScanQR/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SendMessageList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReceivedMessagesList/>
      </TabPanel>
    </div>
  );
}

const LogoWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
text-align:center;


    img {
        width:50px;
        height:auto;
        margin:10px;

    }
    h4{
        color:white;
        margin-bottom:30px;
        font-size:20px;
    }

   
`