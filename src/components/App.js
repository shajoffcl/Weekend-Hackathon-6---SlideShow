import React, { useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const { slides } = props;
  const [index, setIndex] = useState(0);
  const handleClick = (action) => {
    switch (action) {
      case "prev":
        setIndex(index - 1);
        break;
      case "Reset":
        setIndex(0);
        break;
      case "Next":
        setIndex(index + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      <button
        data-testid="button-prev"
        onClick={() => handleClick("prev")}
        disabled={index === 0}
      >
        Prev
      </button>
      <button
        data-testid="button-restart"
        onClick={() => handleClick("Reset")}
        disabled={index === 0}
      >
        Reset
      </button>
      <button
        data-testid="button-next"
        onClick={() => handleClick("Next")}
        disabled={index === slides.length - 1}
      >
        Next
      </button>
    </>
  );
};

export default App;
