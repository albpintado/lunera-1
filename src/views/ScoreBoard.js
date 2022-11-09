import Team from "components/Team";
import React from "react";

const ScoreBoard = () => {
  return (
    <>
      <header>
        <h2>Solera Teams. Bootcamp 4</h2>
      </header>
      <main>
        <Team name="Team 1" score="0" />
        <Team name="Team 2" score="0" />
        <Team name="Team 3" score="0" />
        <Team name="Team 4" score="0" />
        <Team name="Team 5" score="0" />
        <Team name="Team 6" score="0" />
        <Team name="Team 7" score="0" />
        <Team name="Team 8" score="0" />
        <Team name="Team 9" score="0" />
        <Team name="Team 10" score="0" />
      </main>
    </>
  );
};

export default ScoreBoard;
