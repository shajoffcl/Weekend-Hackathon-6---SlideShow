import React, { useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const { slides } = props;
  return (
    <>
      {slides.map((slide) => (
        <div>
          <h1 data-testid="title">{slide.title}</h1>
          <p data-testid="text">{slide.text}</p>
        </div>
      ))}
    </>
  );
};

export default App;
