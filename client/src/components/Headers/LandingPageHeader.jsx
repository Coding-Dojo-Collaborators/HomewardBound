/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, createRef } from 'react';

// Reactstrap Components
import { Button, Container } from 'reactstrap';

// Others
import splashcover from 'assets/img/splashcover.jpg';
import { Link } from 'react-router-dom';

export default () => {
  let pageHeader = createRef();

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  const myStyle = {
    backgroundImage:
      `url(${splashcover})`,
    height: '100vh',
    paddingTop: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div
        style={myStyle}
        className='page-header'
        data-parallax={true}
        ref={pageHeader}
      >
        <div className='filter' />
        <Container>
          <div className='motto text-center'>
            <h1 className='mb-3'>Put Your Love Into Action</h1>
            <h4>Each of us has a role to play in creating a better world for animals.</h4>
            <br />
            <Button
              className='mt-3 btn-outline-light'
              type='button' outline
              size='md'
              tag={Link} to='/register'
            >
              Sign Up
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}