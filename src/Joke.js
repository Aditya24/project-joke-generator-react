import React from "react";
import "./App.css";
const quote = "'";
const Joke = ({ jokes }) => {
  return (
    <>
      <h1 className='main-heading'>One joke a day keeps the bugs away! </h1>
      <h2 className='bottom-heading'>Refresh for more... </h2>
      <div className='joke-container'>
        <div className='joke-item'>
          <h2 className='joke-heading content'></h2>
          <p className='joke-category content'></p>
          <p className='joke content'>
            {quote}
            {jokes.joke}
          </p>
        </div>
      </div>
    </>
  );
};

export default Joke;
