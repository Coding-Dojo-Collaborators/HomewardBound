/* eslint-disable no-dupe-keys */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

// Reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from 'reactstrap';
import Image from 'react-bootstrap/Image';

// MUI
import { styled } from '@mui/material/styles';
import { IconButton } from '@material-ui/core';

// Styles
import styles from '../../../assets/css/modules/paper-dashboard.module.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// Others
import defaultcover from '../../../assets/img/bgimages/bg-profile.jpeg';
import cat from '../../../assets/img/cats/cat1.jpg'
import { Link } from 'react-router-dom';

export default ({ loggedInUser }) => {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const contentDiv = {
    padding: '0 30px 30px',
    minHeight: 'calc(100vh - 123px)',
    marginTop: '60px',
  }
  const UserCard = styled(Card)({
    borderRadius: '12px',
    boxShadow: '0 6px 10px - 4px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#ffffff',
    color: '#252422',
    marginBottom: '20px',
    position: 'relative',
    border: '0 none',
    flexDirection: 'column',
    minWidth: 0,
    wordWrap: 'break-word',
    backgroundClip: 'initial',
    outline: 'none',
    boxSizing: 'border-box',
    webkitTransition: 'transform 300ms cubic - bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease',
    mozTransition: 'transform 300ms cubic - bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease',
    oTransition: 'transform 300ms cubic - bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease',
    msTransition: 'transform 300ms cubic - bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease',
    transition: 'transform 300ms cubic - bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease',
    breakpointSs: 0,
    breakpointSm: '576px',
    breakpointMd: '768px',
    breakpointLg: '992px',
    breakpointXl: '1200px',
  })
  const UserCardBody = styled(CardBody)({
    padding: '25px 25px 20px 25px !important',
    minHeight: '240px !important',
    flex: '1 1 auto !important',
  })
  const UserCardHeader = styled(CardHeader)({
    padding: '15px 25px 0 !important',
    border: 0,
    backgroundColor: 'initial',
  })
  const UserCardTitle = styled(CardTitle)({
    marginTop: '10px !important',
  })
  const coverContainer = {
    overflow: 'hidden',
    position: 'relative',
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: 'contain !important',
    backgroundPosition: 'top center !important',
    backgroundOrigin: 'border-box !important',
    objectFit: 'cover !important',
    height: 130,
    borderRadius: '12px 12px 0 0',
    maxWidth: '100%',
    verticalAlign: 'middle',
    borderStyle: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    // bsGutterX: '0 !important'
  }
  const ImageCover = styled(Image)({
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: 'contain !important',
    backgroundPosition: 'center !important',
    backgroundOrigin: 'border-box !important',
    objectFit: 'cover !important',
    height: 130,
    maxWidth: '100%',
    borderRadius: '12px 12px 0 0',
    verticalAlign: 'middle',
    borderStyle: 'none',
    outline: 'none',
    boxSizing: 'border-box',
  })
  const AvatarImage = styled(Image)({
    borderRadius: '50% !important',
    border: '1px solid #fff !important',
    overflow: 'hidden !important',
    marginTop: '-90px',
    marginBottom: '0px',
    maxWidth: '100% !important',
    verticalAlign: 'middle !important',
    boxSizing: 'border-box',
    display: 'block',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  })
  const nameHeader = {
    fontWeight: '700 !important',
    fontSize: '1.50em !important',
    lineHeight: '1.4em !important',
    marginBottom: '15px !important',
  }
  // const Links = styled(Link)({
  //   color: '#f47660 !important',
  //   textDecoration: 'none',
  //   backgroundColor: 'initial',
  // })
  const userDesc = {
    fontSize: '.9em !important',
    fontWeight: '300 !important',
    marginTop: '-7px !important',
    color: '#9a9a9a !important',
    marginBottom: '1rem !important',
    textAlign: 'center'
  }
  const UserCardFooter = styled(CardFooter)({
    paddingTop: '0 !important',
    padding: '0.75rem 1.25rem',
  })
  const cardLabel = {
    fontSize: '.8571em',
    marginBottom: '5px',
    color: '#9a9a9a',
  }
  const InputStyling = styled(Input)({
    padding: '10px',
    height: 'unset',
    border: '1px solid #ddd',
    color: '#66615b',
    lineHeight: 'normal',
    fontSize: '14px',
    transition: 'color .3s ease-in-out, border-color .3s ease-in-out, background-color .3s ease-in-out',
    boxShadow: 'none',
  })
  const UpdateButton = styled(Button)({
    borderWidth: '1px',
    paddingRight: '23px',
    paddingLeft: '23px',
    fontWeight: 600,
    fontSize: '.8571em',
    lineHeight: '1.35em',
    textTransform: 'uppercase',
    border: 'none',
    margin: '10px 1px',
    padding: '11px 22px',
    transition: 'all .15s linear',
    textAlign: 'center',
    verticalAlign: 'middle',
  })
  const updateRow = {
    // marginLeft: 'auto !important',
    // marginRight: 'auto !important'
    display: 'flex',
    justifyContent: 'center'
  }
  const imgInputStyles = {
    container: {
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      width: '100%',
    },
    preview: {
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column',
    },
    image: { maxWidth: '100%', maxHeight: 320 },
    delete: {
      cursor: 'pointer',
      padding: 15,
      background: 'red',
      color: 'white',
      border: 'none',
    },
  };
  const UploadIcon = styled(IconButton)({
    position: 'absolute',
    bottom: 0,
    left: 0,
  })

  return (
    <div className={`${styles.content} gx-0`}
      style={contentDiv}>
      <Row className='d-flex justify-content-center gap-5 mt-5'>
        <Col md='4'>
          <UserCard className={`${styles['card-user']}`}>
            <div className='g-0 gx-0'
              style={coverContainer}
            >
              <ImageCover
                alt='...'
                src={defaultcover}
              />
            </div>
            <UserCardBody>
              <div className={`${styles.author}`}>
                <div style={{ position: 'relative' }}>
                  <AvatarImage
                    alt='...'
                    className={`${styles.avatar} ${styles['border-gray']}`}
                    src={cat}
                  />
                  <input accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={imageChange}
                    style={{ display: 'none' }} />
                  <label htmlFor="icon-button-file">
                    <UploadIcon aria-label="upload picture"
                      component="span" style={{ color: '#f47660' }}>
                      <i className='nc-icon nc-camera-compact'>
                      </i>
                    </UploadIcon>
                  </label>
                </div>
                <h5
                  className={`${styles.title} fw-bold mt-3`}
                  style={nameHeader}>
                  {loggedInUser.firstName} {loggedInUser.lastName}
                </h5>
                <p style={userDesc}>
                  @chetfaker
                </p>
              </div>
              <p style={userDesc}>
                'I like the way you work it <br />
                No diggity <br />I wanna bag it up'
              </p>
            </UserCardBody>
            <UserCardFooter>
              <hr />
              <div className={`${styles['button-container']}`}>
                {/* <Row className='d-flex justify-content-center'>
                  <Col className='ml-auto' lg='3' md='6' xs='6'>
                    <h5>
                      {
                        loggedInUser.birthday === '' && "0"
                      }
                      {loggedInUser.birthday} <br />
                      <small>Age</small>
                    </h5>
                  </Col>
                  <Col className='ml-auto mr-auto' lg='4' md='6' xs='6'>
                    <h5>
                      {loggedInUser.numOfDogsOwned} <br />
                      <small>Dogs Owned</small>
                    </h5>
                  </Col>
                  <Col className='mr-auto' lg='3'>
                    <h5>
                      {loggedInUser.numOfCatsOwned} <br />
                      <small>Cats Owned</small>
                    </h5>
                  </Col>
                </Row> */}
              </div>
            </UserCardFooter>
          </UserCard>
        </Col>
        <Col md='6'>
          <UserCard className={`${styles['card-user']}`}>
            <UserCardHeader>
              <UserCardTitle tag='h5'>Edit Profile</UserCardTitle>
            </UserCardHeader>
            <UserCardBody>
              <Form>
                <Row>
                  <Col className='pr-1' md='6'>
                    <FormGroup>
                      <label style={cardLabel}>First Name</label>
                      <InputStyling
                        defaultValue={loggedInUser.firstName}
                        placeholder={loggedInUser.firstName}
                        type='text'
                      />
                    </FormGroup>
                  </Col>
                  <Col className='pl-1' md='6'>
                    <FormGroup>
                      <label style={cardLabel}>Last Name</label>
                      <InputStyling
                        defaultValue={loggedInUser.lastName}
                        placeholder={loggedInUser.lastName}
                        type='text'
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className='pr-1' md='7'>
                    <FormGroup>
                      <label htmlFor='exampleInputEmail1' style={cardLabel}>
                        Email address
                      </label>
                      <InputStyling
                        placeholder={loggedInUser.email}
                        type='email' />
                    </FormGroup>
                  </Col>
                  <Col className='pl-1' md='5'>
                    <FormGroup>
                      <label htmlFor='exampleInputPassword1' style={cardLabel}>
                        Update Password
                      </label>
                      <InputStyling
                        placeholder={loggedInUser.password}
                        type='password' />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className='pr-1' md='6'>
                    <FormGroup>
                      <label style={cardLabel}>Birthday</label>
                      <InputStyling
                        placeholder={loggedInUser.birthday}
                        type='date' />
                    </FormGroup>
                  </Col>
                  <Col className='pl-1' md='6'>
                    <FormGroup>
                      <label style={cardLabel}>Postal Code</label>
                      <InputStyling placeholder='ZIP Code' type='number' />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md='12'>
                    <FormGroup
                      style={imgInputStyles.container}>
                      {/* <div style={imgInputStyles.container}>
                        <input
                          accept='image/*'
                          type='file'
                          onChange={imageChange}
                        />
                        {selectedImage && (
                          <div style={imgInputStyles.preview}>
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              style={imgInputStyles.image}
                              alt='Thumb'
                            />
                            <button onClick={removeSelectedImage} style={imgInputStyles.delete}>
                              Remove This Image
                            </button>
                          </div>
                        )}
                      </div> */}
                      <div style={{
                        display: 'flex',
                        margin: '0 auto',
                        width: 400,
                        flexWrap: 'wrap',
                      }}>
                        {/* <input accept="image/*"
                          id="icon-button-file"
                          type="file"
                          onChange={imageChange}
                          style={{ display: 'none' }} />
                        <label htmlFor="icon-button-file">
                          <IconButton aria-label="upload picture"
                            component="span" style={{ color: '#f47660' }}>
                            <i className='nc-icon nc-camera-compact'>
                            </i>
                          </IconButton>
                        </label> */}
                        {selectedImage && (
                          <div style={imgInputStyles.preview}>
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              style={imgInputStyles.image}
                              alt='Thumb'
                            />
                            <button onClick={removeSelectedImage} style={imgInputStyles.delete}>
                              Remove This Image
                            </button>
                          </div>
                        )}
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <div className='update ml-auto mr-auto'
                  style={updateRow}>
                  <UpdateButton
                    className='btn login-btn'
                    type='submit'
                  >
                    <i className='nc-icon nc-badge me-2'>
                    </i>
                    <small>Update Profile</small>
                  </UpdateButton>
                </div>
              </Form>
            </UserCardBody>
          </UserCard>
        </Col>
      </Row>
    </div>
  );
}
