import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'reactstrap';
import "./DogProfile.css"

// Reactstrap components
import {
  List,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

// MUI
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PetsIcon from '@mui/icons-material/Pets';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PaidIcon from '@mui/icons-material/Paid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Link from '@mui/material/Link';
import { Box, Grid, Paper } from '@mui/material';
// import Button from '@mui/material/Button';
// import { createTheme } from '@mui/material/styles';

// Styles
import styles from '../../../assets/css/modules/paper-dashboard.module.css';

// Images
import dogbanner from '../../../assets/img/dogs/dog14.jpg';


const DogProfile = () => {
  const [value, setValue] = useState(1);
  // const [activeTab, setActiveTab] = useState('radio1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const divContent = {
    width: '80%',
    margin: '50px auto',
  }
  const ListItems = styled(List)({
    display: 'block',
    textIndent: '-1.5px',
    paddingLeft: '45px',
    fontSize: '15px',
    lineHeight: '1.5em',
    fontWeight: '300 !important',
  })
  const PawIcon = styled(PetsIcon)({
    fontSize: '14px',
    margin: '0 10px 5px -27px'
  })
  const ColoredCheckbox = styled(Checkbox)({
    color: '#2c2c2c',
    '&.Mui-checked': {
      color: '#f47660',
    },
    fontSize: '15px',
    lineHeight: '1.5em',
    fontWeight: '300 !important',
    margin: '0 0 0 19px'
  })
  const CheckboxLabel = styled(FormControlLabel)({
    fontSize: '15px',
    lineHeight: '1.5em',
    fontWeight: '300 !important',
  })
  const linkStyle = {
    color: "#f47660",
    textDecoration: "none",
    "&:hover": {
      color: "#f47660",
      fontWeight: '500 !important',
      textDecoration: "underline"
    }
  }

  return (
    <>
      <div className={`${styles.content}`} style={divContent}>
        <Row className='d-flex justify-content-center mt-5'>
          <Col md='12' className=''>
            <Paper
              sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                height: '280px',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${dogbanner})`,
              }}
            >
              {/* Increase the priority of the hero background image */}
              {<img style={{ display: 'none' }} src={dogbanner} alt='Cute animal pics' className='rounded' />}
              <Box className='rounded'
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0,0,0,.3)',
                }}
              />
              <Grid container>
                <Grid item md={7}>
                  <Box
                    sx={{
                      position: 'relative',
                      p: { xs: 1, md: 4 },
                      pr: { md: 0 },
                    }}
                  >
                    <h4 className='mb-3'>
                      What Kind of Dog is Right for You?
                    </h4>
                    <p className=''>
                      Best friends are good listeners and always happy to see you. They are always there to lend a shoulder to cry on. Whether jogging partners or worthy sporting opponents, they spring to your defense whenever needed. Best friends are loyal, steadfast and true. And they always know how to make you laugh! While it may take years to find a new human best friend, your new canine best friend awaits you at the local shelter.
                    </p>
                    <Link href="https://www.petfinder.com/pet-adoption/dog-adoption/type-dog-adoption/" target='_blank' style={linkStyle}>
                      Learn More
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Col>
        </Row>
        <Card>
          <CardHeader>
            <CardTitle tag='h2' className='text-center p-4'>Dogs up for Adoption</CardTitle>
            <p className='card-category px-4 text-center'>
              Browse our newest dogs looking for a new loving home!
            </p>
          </CardHeader>
          <CardBody>
            <Card>
              <CardBody>
                <div className='places-buttons'>
                  <Row>
                    <Col className='ml-auto mr-auto text-center mb-3 mt-2' md='12'>
                      <CardTitle tag='h4'></CardTitle>
                    </Col>
                  </Row>
                  <Row className='p-3 px-5'>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                          <div class="overlay1">
                          </div>
                        </div>
                        <h3 class="title">David</h3>
                        <span class="post">Pitbull</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="data:image/jpeg;base64,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" />
                        </div>
                        <h3 class="title">Scruffy</h3>
                        <span class="post">Bulldog</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="data:image/jpeg;base64,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" />
                        </div>
                        <h3 class="title">Sam</h3>
                        <span class="post">Husky</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOW2TvEHWqn3AXm3xN3EXDxtPGrfvYYD1Tw&usqp=CAU" />
                        </div>
                        <h3 class="title">Bilbo</h3>
                        <span class="post">Weiner Dog</span>
                      </div>
                    </div>
                  </Row>
                  <Row className='p-3 px-5'>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHqZrDyAwUD0RiOcy42xmjoh5UCz2lE6zMA&usqp=CAU" />
                        </div>
                        <h3 class="title">Buddy</h3>
                        <span class="post">Black Lab</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9mgwC4zmzP8-9YyLMWnRcrecE-w9grV6PQ&usqp=CAU" />
                        </div>
                        <h3 class="title">Lucky</h3>
                        <span class="post">Golden Retriever</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwO2TXkRN_nkQsM34R30mhL8m97PQ_itQ6g&usqp=CAU" />
                        </div>
                        <h3 class="title">Craig</h3>
                        <span class="post">Chichahua</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzVa8O-_Ii3yXGIr63B4UbhuPKPwnuYj47A&usqp=CAU" />
                        </div>
                        <h3 class="title">Goose</h3>
                        <span class="post">Golden Retrevier</span>
                      </div>
                    </div>
                  </Row>

                  <Row className='p-3 px-5'>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeSzea2x7iwTMf6losrKYqMy-gwxeOqDsIw&usqp=CAU" />
                        </div>
                        <h3 class="title">Frank</h3>
                        <span class="post">Poodle</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-d5eR4n30tcy46E7cefDB430dyLYqDbDLNA&usqp=CAU" />
                        </div>
                        <h3 class="title">Sammy</h3>
                        <span class="post">Shih Tzu</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJndzAjyBD4W-2D_TRLoVrWO98Kwgh_zS7w&usqp=CAU" />
                        </div>
                        <h3 class="title">Fluffy</h3>
                        <span class="post">Bernese Mountain Dog</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrQaZp1cjwBNAFnqye0kxFok1nF9yqfRokg&usqp=CAU" />
                        </div>
                        <h3 class="title">blu</h3>
                        <span class="post">Border Collie</span>
                      </div>
                    </div>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>

    </>
  )
}

export default DogProfile