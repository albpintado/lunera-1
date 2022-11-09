import Team from "components/Team";
import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ teams }) => {
  return (
    <>
      <header>
        <h2>Solera Teams. Bootcamp 4</h2>
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
