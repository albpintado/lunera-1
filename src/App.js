import Tasks from "components/Tasks";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ScoreBoard from "views/ScoreBoard";

function App() {
  const teamTasks = [
    { name: "Task 1", score: 0 },
    { name: "Task 2", score: 5 },
    { name: "Task 3", score: 0 },
    { name: "Task 4", score: 1 },
    { name: "Task 5", score: 0 },
  ];

  let teams = [
    { name: "EQUIPO AA", id: 1, tasks: teamTasks },
    { name: "ARENAL+", id: 2, tasks: teamTasks },
    { name: "CRUCE DE BANDERAS", id: 3, tasks: teamTasks },
    { name: "LUNERA", id: 4, tasks: teamTasks },
    { name: "DEGARA", id: 5, tasks: teamTasks },
    { name: "CODEPIRINHA", id: 6, tasks: teamTasks },
    { name: "JSLOVERS", id: 7, tasks: teamTasks },
    { name: "BUGABIT", id: 8, tasks: teamTasks },
    { name: "LOS PIBES DEL FONDO", id: 9, tasks: teamTasks },
    { name: "VALLE SILICONA", id: 10, tasks: teamTasks },
  ];

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/tasks" element={<Tasks teams={teams} />}></Route>
          <Route path="/tasks/:id" element={<Tasks teams={teams} />}></Route>
          <Route path="/" element={<ScoreBoard teams={teams} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
