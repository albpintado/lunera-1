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
    { name: "Equipo AA", id: 1, tasks: teamTasks },
    { name: "Arenal+", id: 2, tasks: teamTasks },
    { name: "Cruce de banderas", id: 3, tasks: teamTasks },
    { name: "Lunera", id: 4, tasks: teamTasks },
    { name: "Degara", id: 5, tasks: teamTasks },
    { name: "Codepirinha", id: 6, tasks: teamTasks },
    { name: "JSLovers", id: 7, tasks: teamTasks },
    { name: "Bugabit", id: 8, tasks: teamTasks },
    { name: "Los pibes del fondo", id: 9, tasks: teamTasks },
    { name: "Valle Silicona", id: 10, tasks: teamTasks },
  ];

  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Score Board</Link>
            </li>
          </ul>
        </nav>
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
