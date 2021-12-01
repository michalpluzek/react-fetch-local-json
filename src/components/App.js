import React, { useEffect, useState } from "react";
import Word from "./Word";

const App = () => {
  const [words, setWords] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(fetchData, 3000);
    console.log("useEffect");
  }, []);

  const fetchData = () => {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        setWords(data.words);
        setIsLoaded(true);
      });
  };

  const _words = words.map((word) => (
    <Word key={word.id} nameEn={word.en} namePl={word.pl} />
  ));

  return <ul>{isLoaded ? _words : "Wczytuję dane"}</ul>;
};

export default App;
