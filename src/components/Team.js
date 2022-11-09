import React from "react";

const Team = ({ name, score }) => {
  return (
    <article>
      <header>
        <h3>{name}</h3>
      </header>
      <p>{score}</p>
    </article>
  );
};

export default Team;
