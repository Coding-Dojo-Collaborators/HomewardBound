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
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3EvtoELv_W5IoiYUsPvIpt7u8B-atj3PCA&usqp=CAU" />
                        </div>
                        <h3 class="title">Luna</h3>
                        <span class="post">Abyssinian Cat</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="data:image/jpeg;base64,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" />
                        </div>
                        <h3 class="title">Milo</h3>
                        <span class="post">American Bobtail Cat Breed</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWgy3njIRPaIt-mkAoKcPtfkpDfKU3l6cPA&usqp=CAU" />
                        </div>
                        <h3 class="title">Oliver</h3>
                        <span class="post">American Curl Cat Breed</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaZubCo6dnCJmhYlITLHOaJRakxJqgsqEew&usqp=CAU" />
                        </div>
                        <h3 class="title">Leo</h3>
                        <span class="post">American Shorthair Cat</span>
                      </div>
                    </div>
                  </Row>
                  <Row className='p-3 px-5'>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE_v5lKYqUCYkzit3AHRyJHtAKp0gV09Lrg&usqp=CAU" />
                        </div>
                        <h3 class="title">Loki</h3>
                        <span class="post">Australian Mist</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvx-cSDBVLzCVR8yAmqUsdcWWsiLIZZcBIPQ&usqp=CAU" />
                        </div>
                        <h3 class="title">Bella</h3>
                        <span class="post">Bengal</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJey2FR2kEDYmQSQZFMwo0ia0s34xMvFxZA&usqp=CAU" />
                        </div>
                        <h3 class="title">Charlie</h3>
                        <span class="post">Bombay</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPtIZeyxYiKcz4zXKYyW7u77Xmx7_AYqgXw&usqp=CAU" />
                        </div>
                        <h3 class="title">Willow</h3>
                        <span class="post">British Shorthair</span>
                      </div>
                    </div>
                  </Row>

                  <Row className='p-3 px-5'>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU" />
                        </div>
                        <h3 class="title">Lucy</h3>
                        <span class="post">Burmese</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInqC9zqzS8tbV6UmxCwuO3ik32ZI36ZdW3A&usqp=CAU" />
                        </div>
                        <h3 class="title">Simba</h3>
                        <span class="post">Cyprus</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiWkKUlwaH_JJgxiYwvWpBXdTTkkTfVBvgQ&usqp=CAU" />
                        </div>
                        <h3 class="title">Evie</h3>
                        <span class="post">Egyptian Mau</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="petprofile">
                        <div class="pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4olrMzWQhSQjtnJ_SJ1rRt32qC52_R3bK1g&usqp=CAU" />
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