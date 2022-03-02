/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import IconArrowDown from './../Icons/IconArrowDown'
import './SlideButton.scss'

export default ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </button>
);
