/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

// Reactstrap Components
import { Button, Container } from 'reactstrap';

// Others
import splashcover from 'assets/img/splashcover.jpg';

export default () => {
  let pageHeader = React.createRef();

  React.useEffect(() => {
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
        style={myStyle
          // {
          // backgroundImage:
          //   'url(' + require('assets/img/splashcover.jpg').default + ')',
          // }
        }
        className='page-header'
        data-parallax={true}
        ref={pageHeader}
      >
        <div className='filter' />
        <Container>
          <div className='motto text-center'>
            <h1>Put Your Love Into Action</h1>
            <h3>Each of us has a role to play in creating a better world for animals.</h3>
            <br />
            <Button
              // className='bg-danger'
              color='neutral'
              type='button' outline>
              Sign Up
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}