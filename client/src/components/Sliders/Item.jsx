/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'

export default ({img, id }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src={img} alt="pic"
            className='img-rounded img-responsive '
          />
          <ShowDetailsButton onClick={() => onSelectSlide(id)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);
