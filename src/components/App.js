import React from "react";
import Word from "./Word";

class App extends React.Component {
  state = {
    words: [],
  };

  componentDidMount() {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
        });
      });
  }

  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} nameEn={word.en} namePl={word.pl} />
    ));

    return <ul>{words}</ul>;
  }
}

export default App;
