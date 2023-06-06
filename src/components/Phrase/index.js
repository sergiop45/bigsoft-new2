import React from "react";
import "./phrase.css";

const Phrase = (props) => {
  return (
    <section className="phrase">
      <div className="phrase-container">
        <h2>{props.children}</h2>
      </div>
    </section>
  );
};

export default Phrase;
