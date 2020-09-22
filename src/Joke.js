import React from "react";
import "./App.css";
const quote = "'";
const Joke = ({ jokes }) => {
  return (
    <>
      <h1 className='main-heading'>One joke a day keeps the bugs away! </h1>

      <div className='joke-container'>
        <div className='joke-item'>
          <p className='joke content'>
            {quote}
            {jokes.joke}
          </p>
        </div>
      </div>
      <h2 className='bottom-heading'>Refresh for more... </h2>
    </>
  );
};

export default Joke;
