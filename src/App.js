import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const url =
      "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=religious&type=single";
    const fetchJokes = async function () {
      const response = await fetch(url);
      const joke = await response.json();
      console.log(joke);
      setJokes(joke);
    };
    fetchJokes();
  }, []);

  return <Joke jokes={jokes} />;
}

export default App;
