import Team from "components/Team";
import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ teams }) => {
  return (
    <>
      <header>
        <h2><b>SOLERA TEAMS - BOOTCAMP 4</b></h2>
      </header>
      <main className="main-container">
        {teams.map((team) => (
          <Team team={team} />
        ))}
      </main>
    </>
  );
};

export default ScoreBoard;
