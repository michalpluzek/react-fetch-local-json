import React from "react";
import Word from "./Word";

class App extends React.Component {
  state = {
    words: [],
    isLoaded: false,
  };

  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }

  fetchData = () => {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  };

  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} nameEn={word.en} namePl={word.pl} />
    ));

    return <ul>{this.state.isLoaded ? words : "Wczytuję dane"}</ul>;
  }
}

export default App;
