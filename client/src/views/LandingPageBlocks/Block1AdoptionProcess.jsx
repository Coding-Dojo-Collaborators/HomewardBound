/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import "./process.css";

export default () => {
  return (
    <div id='process'>
      <div className=' process'>
        <div className='text-grey title'>
          <h1>Planning to Adopt a Pet?</h1>
          <h3>Here's what you need to know</h3>
          <div id='container'>
            <div className='box1'>
              <h3>Checklist for Adopters</h3>
              <p>View our checklist to help you choose the pet that will best meet your requirements.</p>
            </div>
            <div className='box2'>
              <h3>Finding the Right Pet</h3>
              <p>Take our match quiz to get matched with the perfect cat or dog.</p>
            </div>
            <div className='box3'>
              <h3>Matching Pet List</h3>
              <p>See a list of nearby dogs or cats ranked based on your quiz score.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Make button link to #adopt */}
      <button>Get Started</button>
    </div>
  );
}