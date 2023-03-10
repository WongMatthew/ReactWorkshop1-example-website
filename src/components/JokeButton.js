import React from "react";

function JokeButton() {
    function handleClick() {
      alert("A little (h)otter!");
    }
  
    return (
        <div className="joke-panel">
            <h2 className="joke-text">Which would you rather be, a penguin or a little otter?</h2>
            <button id="joke-btn" className="joke-btn" onClick={handleClick}>Answer</button>
        </div>
  );
}

export default JokeButton;