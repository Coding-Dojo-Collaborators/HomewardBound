/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

// Reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from 'reactstrap';

// Styles
import './block2.css';

// Others
import dog2 from '../../assets/img/dogs/dog2.jpg';
import cat1 from '../../assets/img/cats/cat1.jpg';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <div  className='section section-dark text-center'>
        <Container>
          <h2 className='adopt-title mt-0'>Pets You Can Adopt</h2>
          <Row className='mx-auto mb-1 d-flex align-items-start gy-0'>
            <Col className='mx-auto' md='5'>
              <Card className='card-profile card-adopt'
                tag={Link} to='/adoptdog'>
                <img
                  alt='dog'
                  className='img-rounded img-responsive adopt-dog'
                  src={dog2}
                />
                <h4><p className='text-center'>Dogs</p></h4>
              </Card>
            </Col>
            <Col className='mx-auto' md='5'>
              <Card className='card-profile card-adopt'
                tag={Link} to='/adoptcat'>
                <img
                  alt='cat'
                  className='img-rounded img-responsive adopt-cat'
                  src={cat1}
                />
                <h4><p className='text-center'>Cats</p></h4>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
    // <div id='adopt'>
    //   <div className=' adopt'>
    //     <div className='text-grey title'>
    //       <h1>Pets you can Adopt</h1>
    //       <div className='imgContainer row'>
    //         <figure className='imgContainer column'>
    //           <img src='https://static.showit.co/800/Md03Acr1SBSejogO2DPwqg/shared/canine_country_club-30.png' alt='The Bread Dog' width='300' height='300'></img>
    //           <figcaption className='text-black'><h1>Cats</h1></figcaption>
    //         </figure>
    //         <figure className='imgContainer column'>
    //           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hopsVtpfpOScwYla4Jgj-fYsh6Mhd1s99Q&usqp=CAU' alt='The Bread Dog' width='300' height='300'></img>
    //           <figcaption className=''><h1>Dogs</h1></figcaption>
    //         </figure>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}