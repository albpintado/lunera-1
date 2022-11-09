import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";
const Team = ({ team }) => {
  const uri = "/tasks/".concat(team.id);
  const totalScore = team.tasks.reduce((acc, currValue) => {
    return acc + currValue.score;
  }, 0);

  return (
    <Link to={uri}>
      <article className="box card card-body">
        <h5 className="card-title">{team.name}</h5>
        <p className="card-text">{totalScore}</p>
      </article>
    </Link>
  );
};

export default Team;
