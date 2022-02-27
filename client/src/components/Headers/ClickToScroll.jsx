import React, { Component, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const useMountEffect = fun => useEffect(fun, []);

const ScrollDemo = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  useMountEffect(executeScroll); // Scroll on mount

  return (
    <>
      {" "}
      {/* React.Fragment*/}
      <div style={{ height: 600 }} /> {/* just to demonstrate scroll*/}
      <div ref={myRef}>I wanna be seen</div>
      {/* Attach ref object to a dom element */}
      <div style={{ height: 1500 }} /> {/* just to demonstrate scroll*/}
      <button onClick={executeScroll}>Click to scroll </button>
      {/* Scroll on click */}
    </>
  );
};

class ReadyToScroll extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef}>Element to scroll to</div>;
  }

  executeScroll = () => this.myRef.current.scrollIntoView();
  // run this method to execute scrolling.
}

render(<ScrollDemo />, document.getElementById("root"));
