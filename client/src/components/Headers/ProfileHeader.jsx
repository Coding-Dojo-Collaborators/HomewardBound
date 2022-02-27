/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

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

  return (
    <>
      <div
        style={{
          backgroundImage:
            'url(' + require('assets/img/fabio-mangione.jpg').default + ')',
        }}
        className='page-header page-header-xs'
        data-parallax={true}
        ref={pageHeader}
      >
        <div className='filter' />
      </div>
    </>
  );
}