import React from "react";
import "./Team.css";
const Team = ({ name, score }) => {
  return (
    <article className="box card card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{score}</p>
      <a href="#" className="card-link">
        TASKS
      </a>
    </article>
  );
};

export default Team;
