/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

// Reactstrap components
import { Col, Row, Button } from 'reactstrap';
// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { Box, Grid, Paper } from '@mui/material';
// import Button from '@mui/material/Button';

// Route Imports
import DogAdoptionRoutes from './DogAdoptionRoutes';

// Images
import pets1 from '../../../assets/img/animals/pets1.jpg';

export default () => {

  const contentDiv = {
    padding: '0 55px 55px',
    minHeight: 'calc(100vh - 123px)',
    marginTop: '60px',
    width: '100%'
  }
  const cardLayout = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '550px'
  }
  // const imageStyle = {
  //   backgroundRepeat: 'no-repeat !important',
  //   backgroundSize: 'contain !important',
  //   backgroundPosition: 'center !important',
  //   backgroundOrigin: 'border-box !important',
  //   objectFit: 'cover !important',
  // }
  const linkStyle = {
    color: "#f47660",
    textDecoration: "none",
    "&:hover": {
      color: "#f47660",
      fontWeight: '500 !important',
      textDecoration: "underline"
    }
  }
  const typography = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
  }

  return (
    <div style={contentDiv}>
      <Row className='d-flex justify-content-center gap-5 mt-5'>
        <Col md='8' className='px-0'>
          <Paper
            sx={{
              position: 'relative',
              backgroundColor: 'grey.800',
              color: '#fff',
              mb: 4,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${pets1})`,
            }}
          >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={pets1} alt='Cute animal pics' className='rounded' />}
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
              <Grid item md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <h2 className='mb-4'>
                    The Comprehensive Guide to Adopting a Pet
                  </h2>
                  <h5 className='mb-4'>
                    Adopting a pet is a big step — but we have a feeling your family is ready to grow. Before starting your search, get tips on choosing the right pet for your lifestyle, preparing your home for a furry family member, and even become a training expert before bringing your pet home. For more information about pet adoption, click here.
                  </h5>
                  <Link href="https://www.petfinder.com/pet-adoption/dog-adoption/the-pet-adoption-guide/" style={linkStyle}>
                    Learn More
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center gap-4 mt-4'>
        {
          DogAdoptionRoutes.map((post, i) => {
            return (
              <Col md='4' className='mb-4'>
                <Card sx={cardLayout} key={i}>
                  <Link href={post.url}>
                    <CardMedia
                      component='img'
                      alt={post.imageLabel}
                      height='230'
                      image={post.image}
                    />
                  </Link>
                  <CardContent className='p-4 pb-0'>
                    <h4 className='mb-3'>
                      {post.title}
                    </h4>
                    <p style={typography} className='mb-0'>
                      {post.description}
                    </p>
                  </CardContent>
                  <CardActions className='p-4'>
                    <Link size='small' className='bg-transparent px-0'
                      href={post.url} sx={linkStyle}>
                      {post.linkText}
                    </Link>
                  </CardActions>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <div className="text-center">
        <Button
          className='mt-4 login-btn mb-1 px-3 py-2 text-center text-white text-decoration-none'
          type='button'
          size='md'
          tag={Link} href='https://www.petfinder.com/pet-adoption/dog-adoption/'
        >
          More Articles on Dog Adoption
        </Button>
      </div>
    </div>
  )
}
