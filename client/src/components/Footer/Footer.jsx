/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

// Reactstrap Components
import { Row, Container } from 'reactstrap';

// Styles
import style from './footer.module.css';

export default ({ currentPage }) => {
  return (
    <>
      {
        currentPage === 'landing' ?
          <footer className='footer footer-black'>
            <Container>
              <Row>
                <nav className='footer-nav d-flex align-items-center justify-content-between'>
                  <div className='credits copyright'>
                    © Homeward Bound 2022
                  </div>
                  <div className='credits ml-auto'>
                    <span className='copyright'>
                      © {new Date().getFullYear()} Unlimited Nerd Works
                    </span>
                  </div>
                </nav>
              </Row>
            </Container>
          </footer > :
          <footer className={`${style.footer} footer-black}`}>
            <Container>
              <Row>
                <nav className='footer-nav d-flex align-items-center justify-content-between'>
                  <div className='credits copyright'>
                    © Homeward Bound 2022
                  </div>
                  <div className='credits ml-auto'>
                    <span className='copyright'>
                      © {new Date().getFullYear()} Unlimited Nerd Works
                    </span>
                  </div>
                </nav>
              </Row>
            </Container>
          </footer >
      }
    </>
  );
}