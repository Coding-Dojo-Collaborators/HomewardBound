import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
import dog1 from './dog1.jpg';
import dog2 from './dog2.jpg';
// import dog2 from 'assets/img/splashcover.jpg';
import './Content.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons'

import React, { Component } from "react";
import Slider from "react-slick";

import {
    Button,
    Container,
    Row,
    Col,
} from 'reactstrap';


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            <div className="bg-secondary text-white slider">
                <div className="margins">
            
                <div className="p-3">
                    <h3>Welcome, </h3>
                    <h2 className="p-3 m-2 text-center"> All Dogs Needing a Forerver Home</h2>

                    <Slider {...settings}>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTmGSKs1Vrtl80YlFj1e2IcKnl9sY9catUZG9-kaPKItt10Y9glsxS4ZWvmuZrBV-DjU&usqp=CAU" />
                            <span class="imgtext">
                                <h1>Frank</h1>
                                
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHqZrDyAwUD0RiOcy42xmjoh5UCz2lE6zMA&usqp=CAU" />
                            <span class="imgtext">
                                <h1>Bilbo</h1>
                              
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLk2ny1Ca5FfN6UKxRy3tIl_dNq6x6HbyeA&usqp=CAU" />
                            <span class="imgtext">
                                <h1>Adam</h1>
                                
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9mgwC4zmzP8-9YyLMWnRcrecE-w9grV6PQ&usqp=CAU" />
                            <span class="imgtext">
                                <h1>Sammy</h1>
                              
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4l57p62UtHoCex9cKr_72XorTbvrQmRhpAQ&usqp=CAU" />
                            <span class="imgtext">
                                <h1> Name </h1>
                      
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QJjp0rPFttL5njt3NAsbUNi1mP2YRQtI0A&usqp=CAU" />
                            <span class="imgtext">
                                <h1> Name </h1>
                        
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuYJtQznG-2YX8e7MCEnXbhI5uJYZlUD_Og&usqp=CAU" />
                            <span class="imgtext">
                                <h1> Name </h1>
                             
                            </span>
                        </div>
                    </Slider>
                </div>
                <div className="p-3 m-2 ">
                    <h2 className="p-3 text-center"> All Cats Needing a Forerver Home</h2>

                    <Slider {...settings}>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTmGSKs1Vrtl80YlFj1e2IcKnl9sY9catUZG9-kaPKItt10Y9glsxS4ZWvmuZrBV-DjU&usqp=CAU" />
                            <span class="imgtext">
                                <h1>Frank</h1>
                           
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHqZrDyAwUD0RiOcy42xmjoh5UCz2lE6zMA&usqp=CAU" />
                            <span class="imgtext">
                                <h1>Bilbo</h1>
                        
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLk2ny1Ca5FfN6UKxRy3tIl_dNq6x6HbyeA&usqp=CAU" />
                            <span class="imgtext">
                                <h1>Adam</h1>
        
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9mgwC4zmzP8-9YyLMWnRcrecE-w9grV6PQ&usqp=CAU" />
                            <span class="imgtext">
                                <h1>Sammy</h1>
                      
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4l57p62UtHoCex9cKr_72XorTbvrQmRhpAQ&usqp=CAU" />
                            <span class="imgtext">
                                <h1> Name </h1>
                              
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QJjp0rPFttL5njt3NAsbUNi1mP2YRQtI0A&usqp=CAU" />
                            <span class="imgtext">
                                <h1> Name </h1>
                               
                            </span>
                        </div>
                        <div class="pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuYJtQznG-2YX8e7MCEnXbhI5uJYZlUD_Og&usqp=CAU" />
                            <span class="imgtext">
                                <h1> Name </h1>
                            
                            </span>
                        </div>
                    </Slider>
                </div>
                <div>
                    <Container>
                        <Row className='mx-auto'>
                            <Col className="mx-auto" md="8">
                                <h2 className="title text-white">Your Ideal Match </h2>
                                <br />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row className='mx-auto mb-5'>
                            <Col md="4">
                                <div className="info">
                                    <div className="description">
                                        <h4 className="info-title mt-0 mb-2">Dog results criteria here</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="info">
                                    <div className="description">
                                        <h4 className="info-title mt-0 mb-2">Cat results criteria here</h4>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
                </div>
            </div>
        );
    }
}


