import React from "react";
import { useParams } from "react-router-dom";
import "../css/task.css";

function Tasks({ teams }) {
  const { id } = useParams();
  const { name, tasks } = teams.find((team) => team.id == id);
  const totalScore = tasks.reduce((acc, currValue) => {
    return acc + currValue.score;
  }, 0);

  return (

    <div className="main-container1">

      <h3><b> SOLERA TEAMS - BOOTCAMP 4</b></h3>

      <div className="titulos">

        <span className="title">{name}</span>

        <span className="title">{totalScore} POINTS</span>

      </div>

      <hr />

      <div className="table">

        {tasks.map((task) => {

          return (

            <div className="item" key={id}>

              <span>{task.name}</span>

              <span>{task.score} POINTS   </span>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default Tasks;
