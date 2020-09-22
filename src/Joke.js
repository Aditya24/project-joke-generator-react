import React from "react";
import "./App.css";

const Joke = () => {
  return (
    <>
      <h1 className='main-heading'>One joke a day keeps the bugs away! </h1>
      <div className='joke-container'>
        <div className='joke-item'>
          <h2 className='joke-heading content'>Joke of the day</h2>
          <p className='joke-category content'>Category:</p>
          <p className='joke content'>on Angular I don't know how to React</p>
        </div>
      </div>
    </>
  );
};

export default Joke;
