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
// import { createTheme } from '@mui/material/styles';

// Styles
import styles from '../../../assets/css/modules/paper-dashboard.module.css';




const CatProfile = () => {
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

  return (
    <>
      <div className={`${styles.content}`} style={divContent}>
        <Card>
          <CardHeader>
            <CardTitle tag='h2' className='text-center p-4'>Cats up for Adoption</CardTitle>
            <p className='card-category px-4'>
              Browse our newest cats looking for a new loving home!
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
                <div class="our-team">
                    <div class="pic">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                    </div>
                    <h3 class="title">Luna</h3>
                    <span class="post">Abyssinian Cat</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                    </div>
                    <h3 class="title">Milo</h3>
                    <span class="post">American Bobtail Cat Breed</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                    </div>
                    <h3 class="title">Oliver</h3>
                    <span class="post">American Curl Cat Breed</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                    </div>
                    <h3 class="title">Leo</h3>
                    <span class="post">American Shorthair Cat</span>
                </div>
            </div>
                  </Row>
                  <Row className='p-3 px-5'>
                    <div class="col-md-3 col-sm-6">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                                        </div>
                                        <h3 class="title">Loki</h3>
                                        <span class="post">Australian Mist</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                                        </div>
                                        <h3 class="title">Bella</h3>
                                        <span class="post">Bengal</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                                        </div>
                                        <h3 class="title">Charlie</h3>
                                        <span class="post">Bombay</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                                        </div>
                                        <h3 class="title">Willow</h3>
                                        <span class="post">British Shorthair</span>
                                    </div>
                                </div>
                                      </Row>

                                      <Row className='p-3 px-5'>  
                    <div class="col-md-3 col-sm-6">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                                        </div>
                                        <h3 class="title">Lucy</h3>
                                        <span class="post">Burmese</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                                        </div>
                                        <h3 class="title">Simba</h3>
                                        <span class="post">Cyprus</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                                        </div>
                                        <h3 class="title">Evie</h3>
                                        <span class="post">Egyptian Mau</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                                        </div>
                                        <h3 class="title">Craig</h3>
                                        <span class="post">Hairless Cat</span>
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

export default CatProfile