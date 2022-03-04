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

  return (
    <>
      <div className={`${styles.content}`} style={divContent}>
        <Card>
          <CardHeader>
            <CardTitle tag='h2' className='text-center p-4'>Dogs up for Adoption</CardTitle>
            <p className='card-category px-4'>
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
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                          <div class="overlay1">
                            <div class="text1">Hello World</div>
                          </div>
                        </div>
                        <h3 class="title">David</h3>
                        <span class="post">Pitbull</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Scruffy</h3>
                        <span class="post">Bulldog</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Sam</h3>
                        <span class="post">Husky</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Bilbo</h3>
                        <span class="post">Weiner Dog</span>
                      </div>
                    </div>
                  </Row>
                  <Row className='p-3 px-5'>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Buddy</h3>
                        <span class="post">Black Lab</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Lucky</h3>
                        <span class="post">Golden Retriever</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Craig</h3>
                        <span class="post">Chichahua</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Goose</h3>
                        <span class="post">Golden Retrevier</span>
                      </div>
                    </div>
                  </Row>

                  <Row className='p-3 px-5'>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Frank</h3>
                        <span class="post">Poodle</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Sammy</h3>
                        <span class="post">Shih Tzu</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Fluffy</h3>
                        <span class="post">Bernese Mountain Dog</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-rjRO4reDCYkdHGLEnoDPacstC_3Zc-KXw&usqp=CAU" />
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