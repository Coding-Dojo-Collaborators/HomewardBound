/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

// Reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// Styles
import "./block3.css";

export default () => {
  return (
    <>
      <div className="section text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Search for Pet Services in your Area</h2>
              <h5 className="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
              <br />
              <Button
                className="btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                See Details
              </Button>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-album-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Beautiful Gallery</h4>
                  <p className="description">
                    Spend your time generating new ideas. You don't have to
                    think of implementing.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">New Ideas</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                  <h4 className="info-title">Statistics</h4>
                  <p>
                    Choose from a veriety of many colors resembling sugar
                    paper pastels.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-sun-fog-29" />
                </div>
                <div className="description">
                  <h4 className="info-title">Delightful design</h4>
                  <p>
                    Find unique and handmade delightful designs related items
                    directly from our sellers.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}