import React from "react";
import "./App.css";

const Joke = ({ jokes }) => {
  return (
    <>
      <h1 className='main-heading'>One joke a day keeps the bugs away! </h1>
      <div className='joke-container'>
        <div className='joke-item'>
          <h2 className='joke-heading content'></h2>
          <p className='joke-category content'>Category:{jokes.category}</p>
          <p className='joke content'>{jokes.joke}</p>
        </div>
      </div>
    </>
  );
};

export default Joke;
