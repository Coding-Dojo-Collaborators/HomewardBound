/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'

export default ({ pet }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === pet.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src={pet.image} alt=""
            className='img-rounded img-responsive'
          />
          <ShowDetailsButton onClick={() => onSelectSlide(pet)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);
