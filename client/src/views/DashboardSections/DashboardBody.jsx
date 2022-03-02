/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

// Core components
import DashboardNavbar from 'components/Navbars/DashboardNavbar';

// MUI
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
// import ManagePostsTab from './ManagePostsTab';

// Misc
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

const DashboardBody = ({ user, children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

DashboardBody.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default function VerticalTabs({ user, loggedInUser, setLoggedInUser, }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <DashboardBody value={value} index={0}>
        Item One
      </DashboardBody>
      <DashboardBody value={value} index={1}>
        Item Two
      </DashboardBody>
      <DashboardBody value={value} index={2}>
        Item Three
      </DashboardBody>
      <DashboardBody value={value} index={3}>
        Item Four
      </DashboardBody>
      <DashboardBody value={value} index={4}>
        Item Five
      </DashboardBody>
      <DashboardBody value={value} index={5}>
        Item Six
      </DashboardBody>
      <DashboardBody value={value} index={6}>
        Item Seven
      </DashboardBody>
    </Box>
  );
}