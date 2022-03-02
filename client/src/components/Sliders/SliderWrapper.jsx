/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './SliderWrapper.scss';
import 'bootstrap/scss/bootstrap.scss';

export default ({ children }) => (
  <div className="slider-wrapper">
    {children}
  </div>
);